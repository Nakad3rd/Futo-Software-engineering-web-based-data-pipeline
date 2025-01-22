import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { historicalData } from '@/utils/predictionModel';

const EnrollmentChart = () => {
  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-futo-primary">Historical Enrollment Data</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={historicalData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="students" 
            stroke="#1B4D3E" 
            strokeWidth={2}
            name="Number of Students"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnrollmentChart;