import axios from 'axios';
import {
  API_KEY,
  TRENDING_URL,
  SEARCH_ID_URL,
  SEARCH_QUERY_URL,
} from 'constans/api-options';

export async function apiMoviesTranding() {
  axios.defaults.baseURL = `${TRENDING_URL}`;
  try {
    return await axios.get(``, {
      params: {
        api_key: API_KEY,
      },
    });
  } catch (error) {
    return error;
  }
}

export async function apiMoviesSearch(query) {
  axios.defaults.baseURL = `${SEARCH_QUERY_URL}`;
  try {
    return await axios.get(``, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        query: query,
      },
    });
  } catch (error) {
    return error;
  }
}

export async function apiMoviesById(movieId) {
  axios.defaults.baseURL = `${SEARCH_ID_URL}`;
  try {
    return await axios.get(`${movieId}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
  } catch (error) {
    return error;
  }
}

export async function apiMoviesCast(movieId) {
  axios.defaults.baseURL = `${SEARCH_ID_URL}`;
  try {
    return await axios.get(`${movieId}/credits`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
  } catch (error) {
    return error;
  }
}

export async function apiMoviesReviews(movieId) {
  axios.defaults.baseURL = `${SEARCH_ID_URL}`;
  try {
    return await axios.get(`${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
  } catch (error) {
    return error;
  }
}
