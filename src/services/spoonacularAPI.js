import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spoonacular.com',
  params: { apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY },
});

export const fetchRecipes = (query) => api.get('/recipes/complexSearch', { params: { query } });
export const fetchRecipeDetails = (id) => api.get(`/recipes/${id}/information`);

