import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "./TableDelay.css";
import RowDelay from "../Row/RowDelay";


const stationById = (id, stations) => stations.find(station => station.id === id);

const calculateRowProps = (train, stations, stationId) => {
  if (!train || !stations || stationId) return
  //const stationsType = stationById()
  const vehicleNumber = train.number;
  const finalStation = stationById(train.connectionStations[train.connectionStations.length - 1].stationId, stations);
  //const allStations = train.connectionStations.map(({stationId}) => )
  console.log(train.connectionStations[train.connectionStations.length - 1].stationId, stations)
}


class TableDelay extends Component {
  //stationById = id => this.props.stations.find(station => station.id === id)

  render() {
    const { stations, stationId, trains } = this.props;
    //const choosenStation = stations.find(({ id }) => id === stationId)
    // console.log(trains)
    console.log(stations)
    // console.log(choosenStation)

    console.log(calculateRowProps(trains[0], stations, stationId))

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
          {this.props.trains.map((item, index) => (
            <RowDelay
              key={index}
              //stationsTypes={choosenStation.stationsTypes[0]}
              connectNumber={item.number}
              destination={item.connectionStations[item.connectionStations.length - 1].stationId}
              departureTime={item.departureTime}
              arrivalTime={item.arrivalTime}
              departure={item.departure}
              platform={item.platform}
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

export default withTranslation()(TableDelay);
