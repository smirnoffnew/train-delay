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
    timeFilter: "arrival",
    showTableLoader: false,
    trainsQuantity: 10,
    message: ""
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
    if (this.state.stationId) {
      this.getTrains(this.state.stationId);
    }
  };

  getTrains = stationId => {
    const url = `https://dpl-qa-ybus-pubapi.sa.cz/restapi/routes/${stationId}/departures?limit=1000`
    this.setState({ showTableLoader: true })
    fetch(url, { mode: "cors" })
      .then(response => response.json())
      .then(trains => this.setState({ trains, showTableLoader: false, message: trains.length ? "" : "No arrivals today :("}))
      .catch(error => {
        console.log(error.message);
        this.setState({ showTableLoader: false, message: "Can't load data :(" })
      });
  }

  componentDidMount = () => {
    let params = new URLSearchParams(window.location.search);
    this.props.i18n.changeLanguage(params.get("lang"));
    this.apiRequestLoop();
    params.get("refresh") &&
      setInterval(() => this.tick(), 1000 * params.get("refresh"));
  };

  componentDidUpdate(_, prevState) {
    if (prevState.stationId !== this.state.stationId) {
      this.getTrains(this.state.stationId)
    }
  }

  render() {
    const { timeFilter, locations, trains, stationId, showLoader, showTableLoader, trainsQuantity, message } = this.state;

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
          setStationId={id => this.setState({ stationId: id, trainsQuantity: 10 })}
          setTimeFilter={value => this.setState({ timeFilter: value })}
          timeFilter={timeFilter}
          showLoader={showLoader}
        />
        <TableDelay
          stations={getStations(locations)}
          trains={trains.slice(0, trainsQuantity)}
          stationId={stationId}
          timeFilter={timeFilter}
          showTableLoader={showTableLoader}
          message={message}
        />
        <TableDelayMobile
          stations={getStations(locations)}
          trains={trains.slice(0, trainsQuantity)}
          stationId={stationId}
          timeFilter={timeFilter}
          showTableLoader={showTableLoader}
          message={message}
        />
        <div className="delay-page__button__wrapper">
          <button
            onClick={() => this.setState({ trainsQuantity: trainsQuantity + 5 })}
            disabled={trains.length <= trainsQuantity}
            className="delay-page__button"
          >
            {this.props.t("delays.searchBar.button")}
          </button>
        </div>
      </div>
    );
  }
}

export default withTranslation()(DelayPage);
