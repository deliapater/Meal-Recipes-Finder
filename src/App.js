import React, { useState } from "react";
import RecipeList from "./RecipeList";
import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="App">
      <SearchForm />
      <RecipeList />
    </div>
  );
}

export default App;
