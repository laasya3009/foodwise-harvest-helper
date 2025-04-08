
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const categories = [
  'Fruits',
  'Vegetables',
  'Dairy',
  'Meat',
  'Grains',
  'Other'
];

export const QuickAdd = () => {
  const [item, setItem] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [expiryDays, setExpiryDays] = useState('7');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!item || !category) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // In a real app, this would add the item to your inventory
    toast.success(`Added ${quantity} ${item} to your inventory`);
    
    // Reset form
    setItem('');
    setCategory('');
    setQuantity('1');
    setExpiryDays('7');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Add</CardTitle>
        <CardDescription>Add a new item to your inventory</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="item">Item Name</Label>
            <Input 
              id="item" 
              placeholder="e.g., Apples" 
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input 
                id="quantity" 
                type="number" 
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="expiry">Expires In (Days)</Label>
            <Input 
              id="expiry" 
              type="number" 
              min="1"
              value={expiryDays}
              onChange={(e) => setExpiryDays(e.target.value)}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-foodwise-primary hover:bg-foodwise-success"
          >
            Add to Inventory
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
