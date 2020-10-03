import React from 'react'
import { Line } from "react-chartjs-2";
import { AppContext } from "../App/AppProvider";



function Historic(){
    const {
        state: { showStar, historical, timeLabels, toCurrency },
    } = React.useContext(AppContext);
    const historicalPrice = []
    for(let i in historical){
        historicalPrice.push(historical[i][toCurrency])
    }
    const data = (canvas) => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(0, 204, 255, 0.3);
    gradient.addColorStop(0, "rgba(0, 204, 255, 0.5)");
    gradient.addColorStop(0.5, "rgba(0, 204, 255, 0.7)");
    gradient.addColorStop(1, "rgba(131, 0, 255, 0.91)");
    return {
        labels: timeLabels,
        datasets: [
            {
                label: `${showStar + " to " + toCurrency} Price`,
                data: historicalPrice,
                backgroundColor: gradient,
                borderColor: [
                    "rgba(0, 204, 255, 0.94)",
                    "rgba(0, 204, 255, 0.94)",
                    "rgba(0, 204, 255, 0.94)",
                    "rgba(0, 204, 255, 0.94)",
                    "rgba(0, 204, 255, 0.94)",
                    "rgba(0, 204, 255, 0.94)",
                    "rgba(0, 204, 255, 0.94)",
                ],
                borderWidth: 1,
                lineTension: 0.2,
            },
        ],
    };
    }
    return <Line data={data} />;
}

export {Historic};