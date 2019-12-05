import React, { Component } from "react";
import { withTranslation } from "react-i18next";

import "./TableDelay.css";
import { calculateRowProps } from "../../functions";
import RowDelay from "../Row/RowDelay";

class TableDelay extends Component {
  render() {
    const { stations, stationId, trains, timeFilter } = this.props;

    return (
      <table className="delay-table">
        <thead>
          <tr className="delay-table__header">
            <th>{this.props.t("delays.list.connection")}</th>
            <th>{this.props.t("delays.list.station")}</th>
            <th>{this.props.t("delays.list.over")}</th>
            <th>{this.props.t("delays.list.arrival")}</th>
            <th>{this.props.t("delays.list.departure")}</th>
            <th>{this.props.t("delays.list.platform")}</th>
            <th>{this.props.t("delays.list.delay")}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {(timeFilter === "arrival" ? trains : [...trains].reverse()).map((item, index) => (
            <RowDelay
              key={index}
              rowProps={calculateRowProps(item, stations, stationId)}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default withTranslation()(TableDelay);
