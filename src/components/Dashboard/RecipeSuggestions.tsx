
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

// Mock data for recipe suggestions
const recipes = [
  { 
    id: 1, 
    name: 'Vegetable Stir Fry', 
    ingredients: ['Carrots', 'Broccoli', 'Bell Peppers'], 
    time: '20 mins' 
  },
  { 
    id: 2, 
    name: 'Avocado & Chicken Salad', 
    ingredients: ['Avocados', 'Chicken Breast', 'Lettuce'], 
    time: '15 mins' 
  },
  { 
    id: 3, 
    name: 'Spinach & Feta Omelette', 
    ingredients: ['Eggs', 'Spinach', 'Feta'], 
    time: '10 mins' 
  }
];

export const RecipeSuggestions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recipe Ideas</CardTitle>
        <CardDescription>Based on your expiring ingredients</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recipes.map((recipe) => (
            <div 
              key={recipe.id} 
              className="p-4 border rounded-lg hover:bg-foodwise-surface transition-colors cursor-pointer"
            >
              <div className="flex justify-between">
                <h3 className="font-medium">{recipe.name}</h3>
                <span className="text-sm text-muted-foreground">{recipe.time}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {recipe.ingredients.join(', ')}
              </p>
            </div>
          ))}
          <Button variant="outline" className="w-full">
            <span>See All Recipes</span>
            <ChevronRight size={16} className="ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
