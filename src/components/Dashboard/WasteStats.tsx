
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, ResponsiveContainer, XAxis, YAxis, Bar, Tooltip, CartesianGrid } from 'recharts';

// Mock data for the waste statistics
const wasteData = [
  { name: 'Jan', amount: 7 },
  { name: 'Feb', amount: 5 },
  { name: 'Mar', amount: 4 },
  { name: 'Apr', amount: 3 },
  { name: 'May', amount: 2 },
  { name: 'Jun', amount: 1 },
];

export const WasteStats = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Waste Reduction</CardTitle>
        <CardDescription>Your progress in reducing food waste</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={wasteData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0' 
              }}
              formatter={(value) => [`${value} items`, 'Wasted']}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar 
              dataKey="amount" 
              fill="#4CAF50" 
              radius={[4, 4, 0, 0]} 
              name="Wasted Items"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
