import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import Menu from "./components/SearchBar/Menu/Menu";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([""]); // State to hold the recipe data
   const handleSearchResults = (data) => {
    setRecipes(data); // Update state with the fetched recipes
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <SearchBar onSearch={handleSearchResults} />
          <Menu />
        </div>
      </header>
      <main className="recipe-list">
        {console.log(recipes)
        }
        {recipes.length === 0 ? (
          <>
            <p className="no-results">No results found</p>
            
          </>
        ) : recipes.length === 1 ? null : (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe_data={recipe} />
          ))
        )}
      </main>
    </div>
  );
}

export default App;
