import React, { Component } from "react";
import { withTranslation } from "react-i18next";

import "./TableDelay.css";
import RowDelayMobile from "../Row/RowDelayMobile";
import { calculateRowProps } from "../../functions";


class TableDelayMobile extends Component {
  componentDidUpdate = () => { };

  render() {
    const { stations, stationId, trains, timeFilter } = this.props;

    return (
      <table className="delay-table delay-table--mobile">
        <thead>
          <tr className="delay-table__header delay-table__header--mobile">
            <th>{this.props.t("delays.mobile.list.finalStation")}</th>
            <th>{this.props.t("delays.mobile.list.arrival.departure")}</th>
            <th>{this.props.t("delays.mobile.list.delay.platform")}</th>
          </tr>
        </thead>
        <tbody>
          {(timeFilter === "arrival" ? trains : [...trains].reverse()).map((item, index) => (
            <RowDelayMobile
              key={index}
              rowProps={calculateRowProps(item, stations, stationId)}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default withTranslation()(TableDelayMobile);
