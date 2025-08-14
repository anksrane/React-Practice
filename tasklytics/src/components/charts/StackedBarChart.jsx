import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

function StackedBarChart({data, masterData}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} barSize={40}   barCategoryGap="25%" barGap={2}>
        <XAxis dataKey="client" />
        <YAxis />
        <Tooltip />
        <Legend />
        {masterData.map((item)=>(
          <Bar key={item.value} dataKey={item.value} stackId="a" fill={item.color} name={item.label} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  )
}

export default StackedBarChart
