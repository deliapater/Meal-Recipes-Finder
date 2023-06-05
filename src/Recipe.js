import React from "react";

function Recipe({ recipe }) {
  return (
    <div className="recipe-card">
      <div className="recipe-header">
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      </div>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}

export default Recipe;
