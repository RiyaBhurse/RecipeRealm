import React, { useState } from 'react';
import SaveFav from '../Fav/SaveFav';

const RecipeCard = ({ recipe_data }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  // Function to toggle favorite state
  const SaveFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="recipe-card">
      <img src={recipe_data.image} alt={recipe_data.title} className="recipe-image" />
      <h3 className="recipe-title">{recipe_data.title}</h3>
      <div className="card-button-container">
        <button className="view-details-button">View Details</button>
        <button className="add-to-favorite-button" onClick={SaveFavorite}>
          <SaveFav isFavorited={isFavorited} />
          <span>Add to Favorites</span>
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
