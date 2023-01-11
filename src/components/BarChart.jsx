import React from 'react'
import { Bar } from 'react-chartjs-2'
// eslint-disable-next-line
import { Chart } from 'chart.js/auto'

const BarChart = ({chartData}) => {
  return (
    <Bar data={chartData}/>
  )
}

export default BarChart