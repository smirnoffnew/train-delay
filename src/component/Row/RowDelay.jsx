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
          {stationsTypes.map(type => <img className="station-type-icon" key={type} src={type === "BUS_STATION" ? busIcon : trainIcon} alt="bus-icon" />)}
          <span className="vehicle-number">{vehicleNumber}</span>
        </td>
        <td className="delay-table__row__destination">{finalStation}</td>
        <td>
          <div className="rowItem-delay">
            <LiveLineRow text={overStations.join(' ')} />
          </div>
        </td>
        <td>
          <p className="time-display">{arrival.toTimeString().slice(0, 5)}</p>
          {Boolean(delay) && <p className="time-with-delay">{addDelayToDate(arrival, delay).toTimeString().slice(0, 5)}</p>}
        </td>
        <td>
         <p className="time-display time-display--bold">{departure.toTimeString().slice(0, 5)}</p>
          {Boolean(delay) && <p className="time-with-delay time-with-delay--bold">{addDelayToDate(departure, delay).toTimeString().slice(0, 5)}</p>}
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
