import { useState } from "react";
import { searchRecipes } from "../../services/recipeService";

const SearchBar = ({onSearch}) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await searchRecipes(query); // Call the API
      console.log("Recipes fetched:", data); // Log the result
      if (onSearch) onSearch(data.results); // Pass data to the parent component if needed
    } catch (err) {
      setError("Failed to fetch recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        placeholder="Search for recipes..."
        className="search-input"
        onChange={(e) => {
          setQuery(e.target.value);
          console.log(query); // Step 4: Log the state value
        }}        
      />
      <button className="search-button" onClick={handleSearch} disabled={loading}>
        {loading ? "Loading..." : "Search"}
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SearchBar;
