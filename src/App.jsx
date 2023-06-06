import React, { useEffect, useState } from 'react';
import {MealCard} from './MealCard';
import {Grid} from '@mui/material';
import './App.css';

function App() {
  const APP_ID = "e5cc6f54";
  const APP_KEY = "dd3b33551a5801a79c1e9f5d9eec9f69";
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getRecipes();
  }, [query])
  const getRecipes = async () => {
    const response = await fetch
          (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <h2 style={{color: '#d40000'}}>Available Meals in Fredericton</h2>
      <Grid sx={{ flexGrow: 1, padding: 5 }} container spacing={3}>
      {recipes.map((recipe) => (
          <MealCard
            title={recipe.recipe.label}
            dishType={recipe.recipe.dishType[0]}
            mealType={recipe.recipe.mealType[0]}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredientLines}
          />
        ))}
        </Grid>
    </div>
  );
}

export default App;
