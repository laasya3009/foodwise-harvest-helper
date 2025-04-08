
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, AlertTriangle } from 'lucide-react';

// Mock data for expiring items
const expiringItems = [
  { id: 1, name: 'Milk', days: 1, category: 'Dairy' },
  { id: 2, name: 'Spinach', days: 2, category: 'Vegetables' },
  { id: 3, name: 'Chicken Breast', days: 3, category: 'Protein' },
  { id: 4, name: 'Avocados', days: 1, category: 'Fruits' }
];

export const ExpiringItems = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-xl">Expiring Soon</CardTitle>
          <CardDescription>Items that need to be used</CardDescription>
        </div>
        <AlertTriangle className="text-foodwise-warning" size={24} />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {expiringItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{item.name}</p>
                <Badge variant="outline">{item.category}</Badge>
              </div>
              <div className="flex items-center text-foodwise-warning">
                <Clock size={16} className="mr-1" />
                <span>{item.days} {item.days === 1 ? 'day' : 'days'}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
