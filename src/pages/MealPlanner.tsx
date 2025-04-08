
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { PlusCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const MealPlanner = () => {
  const [date, setDate] = React.useState<Date>(new Date());

  // Sample meals data
  const meals = [
    { id: 1, date: '2025-04-08', meal: 'Breakfast', name: 'Avocado Toast with Eggs' },
    { id: 2, date: '2025-04-08', meal: 'Lunch', name: 'Chicken Salad with Mixed Greens' },
    { id: 3, date: '2025-04-08', meal: 'Dinner', name: 'Vegetable Stir Fry with Tofu' },
    { id: 4, date: '2025-04-09', meal: 'Breakfast', name: 'Yogurt with Berries and Granola' },
    { id: 5, date: '2025-04-09', meal: 'Lunch', name: 'Mediterranean Quinoa Bowl' },
    { id: 6, date: '2025-04-09', meal: 'Dinner', name: 'Grilled Salmon with Roasted Vegetables' },
  ];

  // Filter meals for the selected date
  const formattedDate = date.toISOString().split('T')[0];
  const dailyMeals = meals.filter(meal => meal.date === formattedDate);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Meal Planner</h1>
        <p className="text-muted-foreground mt-2">
          Plan your meals based on your inventory
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => newDate && setDate(newDate)}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-xl">
                  Meals for {date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                </CardTitle>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => {
                    const newDate = new Date(date);
                    newDate.setDate(date.getDate() - 1);
                    setDate(newDate);
                  }}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => {
                    const newDate = new Date(date);
                    newDate.setDate(date.getDate() + 1);
                    setDate(newDate);
                  }}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {['Breakfast', 'Lunch', 'Dinner'].map((mealType) => {
                  const meal = dailyMeals.find(m => m.meal === mealType);
                  
                  return (
                    <div key={mealType} className="space-y-2">
                      <h3 className="font-medium">{mealType}</h3>
                      {meal ? (
                        <div className="p-4 border rounded-lg bg-foodwise-surface">
                          <div className="flex justify-between items-center">
                            <span>{meal.name}</span>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">Edit</Button>
                              <Button variant="ghost" size="sm" className="text-red-500">Remove</Button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Button variant="outline" className="w-full">
                          <PlusCircle className="h-4 w-4 mr-2" />
                          Add {mealType}
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MealPlanner;
