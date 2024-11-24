import axios from "axios";

const API_KEY = "02892090088140929b97f018a59f74ac";
const BASE_URL = "https://api.spoonacular.com/recipes";

export const searchRecipes = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/complexSearch`, {
      params: {
        query,
        number: 16, // Number of results to fetch
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
