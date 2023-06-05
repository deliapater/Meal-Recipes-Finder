import React, { createContext, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await response.json();
      if (data.meals === null) {
        setError("No recipes found. Try a differenet search!");
      } else {
        setRecipes(data.meals);
      }
    } catch (error) {
        setError("An error occurred. Please try again.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <RecipeContext.Provider
      value={{ recipes, search, setSearch, handleSubmit, loading, error }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
