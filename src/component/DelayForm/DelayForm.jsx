import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { distanceTo } from 'geolocation-utils';
import Select from "react-select";

import { getTodayDate } from "../../functions";
import "./DelayForm.css";

class DelayForm extends Component {
  state = {
    selectedOption: null,
    userLocation: null,
    dateFilter: getTodayDate()
  };

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(({ coords }) => this.setState({ userLocation: coords }));
  }

  calculateOptions = stations => stations.map(({ id, fullname }) => ({ value: id, label: fullname }));

  findClosestHandler = () => {
    if (!this.state.userLocation) {
      return console.error("User's location wasn't detected");
    }
    if (!this.props.stations.length) {
      return console.error("Can't load stations data");
    }
    const { latitude: lat, longitude: lon } = this.state.userLocation;
    const distancesToStations = this.props.stations.map(({ latitude, longitude }) => {
      try {
        return distanceTo({ lat: latitude, lon: longitude }, { lat, lon })
      }
      catch (e) {
        return Infinity
      }
    });
    const minDistance = Math.min(...distancesToStations);
    const stationIndex = distancesToStations.indexOf(minDistance);

    return this.setState({ selectedOption: this.calculateOptions(this.props.stations)[stationIndex] });
  }

  selectStationHandler = selectedOption => {
    this.setState({ selectedOption });
    this.props.setStationId(selectedOption.value);
  }

  submitHandler = () => {
    const { selectedOption } = this.state;
    if (selectedOption) {
      this.props.setStationId(this.state.selectedOption.value)
    }

  }

  render() {
    const { stations, timeFilter, setTimeFilter } = this.props;
    const { selectedOption, dateFilter } = this.state;

    return (
      <form className="delay-form">
        <div className="input-field input-field--select">
          <label className="delay-form__label delay-form__label--select">
            {this.props.t("delays.searchBar.station")}
          </label>
          <Select
            className="station-select"
            value={selectedOption}
            onChange={selectedOption => this.setState({ selectedOption })}
            options={this.calculateOptions(stations)}
          />
          <button className="location-button" type="button" onClick={this.findClosestHandler}></button>
        </div>

        <div className="delay-form__flex-wrapper">
          <div className="input-field">
            <label className="delay-form__label">{this.props.t("delays.searchBar.date")}</label>
            <input disabled onChange={this.chooseDateHandler} value={dateFilter} className="delay-form__date-picker" type="date" />
          </div>

          <div>
            <div className="checkbox-wrapper">
              <input
                type="radio"
                name="arrivalDepartureFilter"
                id="checkboxFirst"
                className="invisibleCheckbox"
                checked={timeFilter === "arrival"}
                onChange={() => setTimeFilter("arrival")}
              />
              <label className="checkbox-label" htmlFor="checkboxFirst">
                <span className="radio-label">{this.props.t("delays.searchBar.arrivals")}</span>
              </label>
            </div>
            <div className="checkbox-wrapper">
              <input
                type="radio"
                name="arrivalDepartureFilter"
                id="checkboxSecond"
                className="invisibleCheckbox"
                value="departure"
                checked={timeFilter === "departure"}
                onChange={() => setTimeFilter("departure")}
              />
              <label className="checkbox-label" htmlFor="checkboxSecond">
                <span className="radio-label">{this.props.t("delays.searchBar.departures")}</span>
              </label>
            </div>
          </div>
        </div>

        <button onClick={this.submitHandler} type="button" className="delay-form__button">{this.props.t("delays.searchBar.button")}</button>
      </form>
    );
  }
}

export default withTranslation()(DelayForm);
