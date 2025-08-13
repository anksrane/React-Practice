import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

function StackedBarChart({data}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="client" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="completed" stackId="a" fill="#4caf50" />
        <Bar dataKey="pending" stackId="a" fill="#ff9800" />
        <Bar dataKey="overdue" stackId="a" fill="#f44336" />
        <Bar dataKey="wip" stackId="a" fill="#f2f3f5" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default StackedBarChart
