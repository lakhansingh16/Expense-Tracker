import "./ChartBar.css"

export default function ChartBar(props){
    let barHeight = Math.round(props.value/props.maxValue*100)+'%';
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height:barHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
}