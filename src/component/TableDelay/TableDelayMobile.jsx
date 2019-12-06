import React, { Component } from "react";
import { withTranslation } from "react-i18next";

import "./TableDelay.css";
import RowDelayMobile from "../Row/RowDelayMobile";
import { calculateRowProps } from "../../functions";


class TableDelayMobile extends Component {
  componentDidUpdate = () => { };

  render() {
    const { stations, stationId, trains, timeFilter, showTableLoader, message } = this.props;

    return (
      <>
        {showTableLoader && <div className="loader"></div>}
        <table className="delay-table delay-table--mobile">
          <thead>
            <tr className="delay-table__header delay-table__header--mobile">
              <th>{this.props.t("delays.mobile.list.finalStation")}</th>
              <th>{this.props.t("delays.mobile.list.arrival.departure")}</th>
              <th>{this.props.t("delays.mobile.list.delay.platform")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3">{message}</td>
            </tr>
            {(timeFilter === "arrival" ? trains : [...trains].reverse()).map((item, index) => (
              <RowDelayMobile
                key={index}
                rowProps={calculateRowProps(item, stations, stationId)}
              />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default withTranslation()(TableDelayMobile);
