import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Rectangle } from "recharts";
import { Loader } from '../index';

function StackedBarChart({data, masterData}) {

  if(!data?.length && !masterData?.length) {
    return (
      <Loader color="#000" />
    )
  }else{
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart 
          data={data} 
          layout="vertical"   
          barCategoryGap="25%" 
          barGap={2}
        >
          <XAxis type="number" />
          <YAxis dataKey="client" type="category" width={150} tickFormatter={(value) => value.length > 10 ? value.slice(0, 10) + "..." : value} tickMargin={10} /> {/* client names */}
          <Tooltip />
          <Legend />
          {masterData.map((item) => (
            <Bar 
              key={item.value} 
              dataKey={item.value} 
              stackId="a" 
              fill={item.color} 
              name={item.label} 
              // activeBar={false}
              activeShape={<Rectangle fill={item.color || "#8884d8"} stroke="none" />}
            />
          ))}
        </BarChart>      
      </ResponsiveContainer>
    )
  }
}

export default StackedBarChart
