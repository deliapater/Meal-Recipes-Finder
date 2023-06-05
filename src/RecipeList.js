import React, { useContext } from "react";
import { RecipeContext } from "./RecipeContext";
import Recipe from "./Recipe";

function RecipeList() {
  const { recipes, loading } = useContext(RecipeContext);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        recipes.map((recipe, index) => <Recipe key={index} recipe={recipe} />)
      )}
    </div>
  );
}

export default RecipeList;
