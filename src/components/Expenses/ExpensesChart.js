import React from 'react';
import Chart from '../Chart/Chart';

export default function ExpensesChart(props){
    const chartDataPoints = [
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'Mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'Jun',value:0},
        {label:'July',value:0},
        {label:'Aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0}
    ];
    let maxValue = -1;
    for(const expense of props.expenses){
        chartDataPoints[expense.date.getMonth()].value += expense.amount;
        maxValue = Math.max(maxValue,expense.amount);
    }
    return (
        <Chart dataPoints={chartDataPoints}maxValue={maxValue} />
    )
}