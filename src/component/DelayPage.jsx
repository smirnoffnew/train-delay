import React, { Component } from "react";
import { withTranslation } from "react-i18next";

import { isNumber, getStations } from "../functions";
import DelayForm from "./DelayForm/DelayForm";
import TableDelay from "./TableDelay/TableDelay";
import TableDelayMobile from "./TableDelay/TableDelayMobile";

class DelayPage extends Component {
  state = {
    rows: [],
    locations: [],
    showLoader: true,
    trains: [],
    stationId: null,
    timeFilter: "arrival"
  };

  apiRequestLoop = () => {
    const rowsUrlLoop =
      "https://dpl-qa-ybus-pubapi.sa.cz/restapi/routes/10204002/departures";
    const locationsUrlLoop =
      "https://dpl-qa-ybus-pubapi.sa.cz/restapi/consts/locations";

    fetch(rowsUrlLoop, { mode: "cors" })
      .then(response => response.json())
      .then(rowsData =>
        fetch(locationsUrlLoop, { mode: "cors" })
          .then(response => response.json())
          .then(locationsData => {
            this.setState({
              rows: rowsData,
              locations: locationsData,
              showLoader: false
            });
          })
          .catch(error => {
            console.log(error.message);
          })
      )
      .catch(error => {
        console.log(error.message);
      });
  };

  tick = () => {
    this.apiRequestLoop();
  };

  getTrains = stationId => {
    const url = `https://dpl-qa-ybus-pubapi.sa.cz/restapi/routes/${stationId}/departures`
    fetch(url, { mode: "cors" })
      .then(response => response.json())
      .then(trains => this.setState({ trains }))
      .catch(error => {
        console.log(error.message);
      });
  }

  componentDidMount = () => {
    let params = new URLSearchParams(window.location.search);
    this.props.i18n.changeLanguage(params.get("lang"));
    this.apiRequestLoop();
    params.get("refresh") &&
      setInterval(() => this.tick(), 1000 * params.get("refresh"));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.stationId !== this.state.stationId) {
      this.getTrains(this.state.stationId)
    }
  }

  render() {
    const { timeFilter, locations, trains, stationId, showLoader } = this.state;

    let params = new URLSearchParams(window.location.search);
    if (!params.get("refresh")) {
      return <div className="not-found">Refresh Query Not Found</div>;
    }
    if (!isNumber(+params.get("refresh"))) {
      return <div className="not-found">Refresh Query Must Be A Number</div>;
    }
    if (!params.get("lang")) {
      return <div className="not-found">Lang Query Not Found</div>;
    }
    if (
      params.get("lang") !== "cs" &&
      params.get("lang") !== "sk" &&
      params.get("lang") !== "en" &&
      params.get("lang") !== "ua" &&
      params.get("lang") !== "de" &&
      params.get("lang") !== "pl" &&
      params.get("lang") !== "hu" &&
      params.get("lang") !== "ru" &&
      params.get("lang") !== "fr" &&
      params.get("lang") !== "es"
    ) {
      return (
        <div className="not-found">
          Lang Query Mismatched
          <br />
          Try to write correct lang into query. Here is a list
          <br />
          <br />
          <div className="list">
            cs
            <br />
            sk
            <br />
            en
            <br />
            ua
            <br />
            de
            <br />
            pl
            <br />
            hu
            <br />
            ru
            <br />
            fr
            <br />
            es
          </div>
        </div>
      );
    }

    return (
      <div className="delay-page__wrapper">
        <h1 className="delay-page__title">{this.props.t("delays.title")}</h1>
        <DelayForm
          stations={getStations(locations)}
          setStationId={id => this.setState({ stationId: id })}
          setTimeFilter={value => this.setState({ timeFilter: value })}
          timeFilter={timeFilter}
        />
        <TableDelay
          stations={getStations(locations)}
          trains={trains}
          stationId={stationId}
          timeFilter={timeFilter} />
        <TableDelayMobile
          stations={getStations(locations)}
          trains={trains}
          stationId={stationId}
          timeFilter={timeFilter} />
        <div className="delay-page__button__wrapper">
          <button className="delay-page__button">{this.props.t("delays.searchBar.button")}</button>
        </div>
      </div>
    );
  }
}

export default withTranslation()(DelayPage);
