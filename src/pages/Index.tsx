
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to dashboard
    navigate('/');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-foodwise-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foodwise-primary mb-4">FoodWise</h1>
        <p className="text-xl text-foodwise-text">Loading your food waste management dashboard...</p>
      </div>
    </div>
  );
};

export default Index;
