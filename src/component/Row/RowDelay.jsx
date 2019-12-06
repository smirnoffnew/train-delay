import React, { Component } from "react";
import { withTranslation } from "react-i18next";

import "./RowDelay.css";
import { addDelayToDate } from "../../functions";
import LiveLineRow from "../liveLineRow/LiveLineRow";
import busIcon from "../../assets/bus-icon.png";
import trainIcon from "../../assets/train-icon.png";

class RowDelay extends Component {
  render() {
    const { stationsTypes, vehicleNumber, finalStation, overStations, arrival, departure, platform, delay } = this.props.rowProps;

    return (
      <tr className="delay-table__row">
        <td>
          {stationsTypes.map(type => <img key={type} src={type === "BUS_STATION" ? busIcon : trainIcon} alt="bus-icon" />)}
          {vehicleNumber}
        </td>
        <td className="delay-table__row__destination">{finalStation}</td>
        <td>
          <div className="rowItem-delay">
            <LiveLineRow text={overStations.join(' ')} />
          </div>
        </td>
        <td>
          {arrival.toTimeString().slice(0, 5)}
          {Boolean(delay) && <span className="time-with-delay">{addDelayToDate(arrival, delay).toTimeString().slice(0, 5)}</span>}
        </td>
        <td>
          {departure.toTimeString().slice(0, 5)}
          {Boolean(delay) && <span className="time-with-delay">{addDelayToDate(departure, delay).toTimeString().slice(0, 5)}</span>}
        </td>
        <td>{platform}</td>
        <td className={`delay-table__row__delay--${!delay ? "positive" : "negative"}`}>
          {delay ? delay + " min." : this.props.t("delays.list.noDelay")}
        </td>
        {/* <td></td> */}
      </tr>
    );
  }
}

export default withTranslation()(RowDelay);
