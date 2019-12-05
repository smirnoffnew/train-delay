import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "./TableDelay.css";
import RowDelayMobile from "../Row/RowDelayMobile";

class TableDelayMobile extends Component {
  componentDidUpdate = () => {};

  render() {
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
          {this.props.rows &&
            this.props.rows.map((item, index) => (
              <RowDelayMobile
                key={index}
                theme={this.props.theme}
                stationsTypes={item.stationsTypes}
                connectNumber={item.connectNumber}
                destination={item.destination}
                departureTime={item.departureTime}
                arrivalTime={item.arrivalTime}
                departure={item.departure}
                platform={item.platform}
                timeColor={item.delay === 0 ? "green" : "red"}
                time={
                  item.delay + " " + this.props.t("display.deartures.minutes")
                }
              />
            ))}
        </tbody>
      </table>
    );
  }
}

export default withTranslation()(TableDelayMobile);
