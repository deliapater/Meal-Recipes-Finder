import React, { useContext } from "react";
import { RecipeContext } from "./RecipeContext";
import './styles.css';

function SearchForm() {
  const { search, setSearch, handleSubmit, error } = useContext(RecipeContext);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search for a recipe:</label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default SearchForm;
