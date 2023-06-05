import React, { useState } from "react";
import RecipeList from "./RecipeList";
import SearchForm from "./SearchForm";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <SearchForm />
      <RecipeList />
    </div>
  );
}

export default App;
