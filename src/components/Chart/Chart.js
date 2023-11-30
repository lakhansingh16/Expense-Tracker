import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.id}
                    value={dataPoint.value}
                    maxValue={props.maxValue}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
}
