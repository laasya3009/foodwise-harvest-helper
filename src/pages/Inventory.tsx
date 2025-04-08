
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Filter, Edit, Trash2 } from 'lucide-react';

// Sample inventory data
const inventoryItems = [
  {
    id: 1,
    name: 'Apples',
    category: 'Fruits',
    quantity: 5,
    expiry: '2025-04-15',
    daysLeft: 7
  },
  {
    id: 2,
    name: 'Milk',
    category: 'Dairy',
    quantity: 1,
    expiry: '2025-04-10',
    daysLeft: 2
  },
  {
    id: 3,
    name: 'Chicken Breast',
    category: 'Meat',
    quantity: 2,
    expiry: '2025-04-12',
    daysLeft: 4
  },
  {
    id: 4,
    name: 'Spinach',
    category: 'Vegetables',
    quantity: 1,
    expiry: '2025-04-09',
    daysLeft: 1
  },
  {
    id: 5,
    name: 'Bread',
    category: 'Grains',
    quantity: 1,
    expiry: '2025-04-13',
    daysLeft: 5
  }
];

const Inventory = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Food Inventory</h1>
        <p className="text-muted-foreground mt-2">
          Manage your food items and track expiration dates
        </p>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle>Your Items</CardTitle>
            <div className="flex gap-2">
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search items..."
                  className="pl-8 w-full sm:w-[200px] lg:w-[300px]"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button className="bg-foodwise-primary hover:bg-foodwise-success">
                <Plus className="h-4 w-4 mr-2" />
                Add New
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Expiry Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inventoryItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.expiry}</TableCell>
                    <TableCell>
                      {item.daysLeft <= 2 ? (
                        <Badge className="bg-foodwise-warning text-black hover:bg-amber-400">
                          Expiring Soon
                        </Badge>
                      ) : item.daysLeft <= 5 ? (
                        <Badge variant="outline" className="text-foodwise-warning border-foodwise-warning">
                          Use Soon
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-foodwise-success border-foodwise-success">
                          Fresh
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Inventory;
