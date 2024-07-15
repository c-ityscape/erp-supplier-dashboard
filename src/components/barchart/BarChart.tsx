import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faCalendar } from "@fortawesome/free-solid-svg-icons";
import './BarChart.scss';

const data = [
  { date: 'Jun 01', orders: 100, payments: 70 },
  { date: 'Jun 02', orders: 100, payments: 70 },
  { date: 'Jun 03', orders: 100, payments: 70 },
  { date: 'Jun 04', orders: 100, payments: 70 },
  { date: 'Jun 05', orders: 100, payments: 70 },
  { date: 'Jun 06', orders: 100, payments: 70 },
  { date: 'Jun 07', orders: 100, payments: 70 },
  { date: 'Jun 08', orders: 100, payments: 70 },
  { date: 'Jun 09', orders: 100, payments: 70 },
  { date: 'Jun 10', orders: 100, payments: 70 },
];

const BarChartComponent = () => {
  return (
    <div className="barChartContainer">
      <div className="header">
        <h1>Orders & Payment Report</h1>
        <div className="controls">
          <button className="controlButton">
            Filter <FontAwesomeIcon icon={faFilter} />
          </button>
          <button className="controlButton">
            Oct 2023 <FontAwesomeIcon icon={faCalendar} />
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="orders" fill="#8884d8" radius={[20, 20, 0, 0]} />
          <Bar dataKey="payments" fill="#82ca9d" radius={[20, 20, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
