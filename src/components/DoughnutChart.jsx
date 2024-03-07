import React from 'react'
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { doughnutData } from '../utils/Data'

const DoughnutChart = () => {
    return (
        <div>
            <Chart
                type="doughnut"
                data={doughnutData}
                options={{
                    cutout: "75%",
                    plugins: {
                        legend: {
                            display: true,
                            position: "right",
                        },
                    },
                    borderWidth: 0.25,
                }}
            />
        </div>
    )
}

export default DoughnutChart