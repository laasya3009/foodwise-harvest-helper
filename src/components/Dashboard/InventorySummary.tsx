
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const categories = [
  { name: 'Fruits & Vegetables', count: 12, total: 15, color: 'bg-green-500' },
  { name: 'Dairy', count: 4, total: 5, color: 'bg-blue-400' },
  { name: 'Grains', count: 6, total: 8, color: 'bg-amber-500' },
  { name: 'Proteins', count: 3, total: 6, color: 'bg-red-400' }
];

export const InventorySummary = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Summary</CardTitle>
        <CardDescription>Overview of your current food items</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {categories.map((category) => (
          <div key={category.name} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{category.name}</span>
              <span className="text-muted-foreground">
                {category.count}/{category.total} items
              </span>
            </div>
            <Progress 
              value={(category.count / category.total) * 100} 
              className={`h-2 ${category.color}`}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
