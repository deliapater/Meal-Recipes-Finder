import React from "react";

function Recipe({ recipe }) {
  return (
    <div>
      <h2>{recipe.strMeal}</h2>
      <p>{recipe.strInstructions}</p>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
    </div>
  );
}

export default Recipe;
