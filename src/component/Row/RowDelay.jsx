import React, { Component } from "react";
import { withTranslation } from "react-i18next";

import "./RowDelay.css";
import LiveLineRow from "../liveLineRow/LiveLineRow";
import busIcon from "../../assets/bus-icon.png";
import trainIcon from "../../assets/train-icon.png";

class RowDelay extends Component {
  render() {
    const {
      stationsTypes,
      connectNumber,
      destination,
      departureTime,
      arrivalTime,
      departure,
      platform,
      time
    } = this.props;

    return (
      <tr className="delay-table__row">
        <td>
          {stationsTypes === "BUS_STATION" ? (
            <img src={busIcon} alt="bus-icon" />
          ) : (
              <img src={trainIcon} alt="train-icon" />
            )}
          {connectNumber}
        </td>
        <td className="delay-table__row__destination">{destination}</td>
        <td>
          <div className="rowItem-delay">
            <LiveLineRow text={departure} />
          </div>
        </td>
        <td>{departureTime}</td>
        <td>{arrivalTime}</td>
        <td>{platform}</td>
        <td
          className={`delay-table__row__delay--${
            time.split(" ")[0] === "0" ? "positive" : "negative"
            }`}
        >
          {time.split(" ")[0] === "0" ? this.props.t("delays.list.noDelay") : time}
        </td>
        <td></td>
      </tr>
    );
  }
}

export default withTranslation()(RowDelay);
