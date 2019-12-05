import React, { Component } from "react";
import { withTranslation } from "react-i18next";

import "./RowDelay.css";
import { addDelayToDate } from "../../functions";
import busIcon from "../../assets/bus-icon.png";
import trainIcon from "../../assets/train-icon.png";

class RowDelayMobile extends Component {
  state = { isRowOpened: false };

  render() {
    const { stationsTypes, vehicleNumber, finalStation, overStations, arrival, departure, platform, delay } = this.props.rowProps;

    return (
      <>
        <tr className={`delay-table__row ${this.state.isRowOpened && "delay-table__row--opened"}`}>
          <td>
            <p className="delay-table__row__destination">{finalStation}</p>
            {stationsTypes && stationsTypes.map(type => <img key={type} src={type === "BUS_STATION" ? busIcon : trainIcon} alt="bus-icon" />)}
            {vehicleNumber}
          </td>
          <td>
            <p>
              {arrival.toTimeString().slice(0, 5)}
              {Boolean(delay) && <span className="time-with-delay">{addDelayToDate(arrival, delay).toTimeString().slice(0, 5)}</span>}
            </p>
            <p className="delay-table__row__arrival-time">
              {departure.toTimeString().slice(0, 5)}
              {Boolean(delay) && <span className="time-with-delay">{addDelayToDate(departure, delay).toTimeString().slice(0, 5)}</span>}
            </p>
          </td>
          <td>
            <div className="last-column">
              <div>
                <p
                  className={`delay-table__row__delay--${!delay ? "positive" : "negative"}`}>
                  {delay} min
                  <svg
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.27518 0.527318C5.4548 0.527318 5.63442 0.613688 5.72767 0.786443L9.96849 8.64102C10.1365 8.95255 9.89187 9.31904 9.516 9.31904H1.03436C0.658134 9.31904 0.413819 8.95255 0.581876 8.64102L4.82269 0.786443C4.91594 0.613688 5.0952 0.527318 5.27518 0.527318ZM5.27518 0C4.88847 0 4.53681 0.20528 4.35828 0.535612L0.117459 8.39056C-0.0462606 8.69342 -0.0383126 9.05122 0.138057 9.34686C0.227326 9.49684 0.355992 9.62227 0.509231 9.70937C0.667168 9.799 0.848599 9.84669 1.03436 9.84669H9.516C9.70141 9.84669 9.88247 9.799 10.0408 9.70937C10.1944 9.62227 10.3223 9.49684 10.4119 9.34686C10.5883 9.05158 10.5963 8.69342 10.4325 8.39056L6.19172 0.535987C6.01355 0.205294 5.66189 0 5.27518 0Z"
                      fill="#292929"
                    />
                    <path
                      d="M5.80216 7.64851C5.80216 7.94017 5.56616 8.17618 5.27486 8.17618C4.9832 8.17618 4.74756 7.94017 4.74756 7.64851C4.74756 7.35721 4.9832 7.12122 5.27486 7.12122C5.56616 7.12122 5.80216 7.35721 5.80216 7.64851Z"
                      fill="#292929"
                    />
                    <path
                      d="M5.27486 2.37378C4.9832 2.37378 4.74756 2.60978 4.74756 2.90107V5.89032C4.74756 6.18198 4.9832 6.41797 5.27486 6.41797C5.56616 6.41797 5.80216 6.18198 5.80216 5.89032V2.90107C5.80216 2.60978 5.56616 2.37378 5.27486 2.37378Z"
                      fill="#292929"
                    />
                  </svg>
                </p>
                <p>{platform}</p>
              </div>
              <button
                onClick={() =>
                  this.setState({ isRowOpened: !this.state.isRowOpened })
                }
                className="circle-toggle"
              ></button>
            </div>
          </td>
        </tr>
        {this.state.isRowOpened && (
          <tr className="delay-table__row__addition">
            <td colSpan="3">
              <h4>{this.props.t("delays.list.over")}</h4>
              <p>{overStations.join(", ")}</p>
              <h4>Důvod zpozědní</h4>
              <p>
                Spoj je opožděn z důvodu dopravní nehody na dálnici D1. Následky
                nehody jsou v současné době odstraňovány.
              </p>
            </td>
          </tr>
        )}
      </>
    );
  }
}

export default withTranslation()(RowDelayMobile);
