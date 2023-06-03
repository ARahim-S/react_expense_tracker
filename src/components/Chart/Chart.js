import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  let totalMaximum = 0;
  [...dataPointValues].map((i) => (totalMaximum += i));
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          maxValue={totalMaximum}
          value={dataPoint.value}
        />
      ))}
    </div>
  );
};

export default Chart;
