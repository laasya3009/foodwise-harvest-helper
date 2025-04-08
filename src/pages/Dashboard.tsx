
import React from 'react';
import { InventorySummary } from '@/components/Dashboard/InventorySummary';
import { ExpiringItems } from '@/components/Dashboard/ExpiringItems';
import { WasteStats } from '@/components/Dashboard/WasteStats';
import { RecipeSuggestions } from '@/components/Dashboard/RecipeSuggestions';
import { QuickAdd } from '@/components/Dashboard/QuickAdd';

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome to FoodWise</h1>
        <p className="text-muted-foreground mt-2">
          Track your food inventory, reduce waste, and discover new recipes
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InventorySummary />
            <ExpiringItems />
          </div>
          <WasteStats />
          <RecipeSuggestions />
        </div>
        
        <div>
          <QuickAdd />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
