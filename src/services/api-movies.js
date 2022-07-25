import axios from 'axios';

const options = {
  API_KEY: 'f17c35877286387c8c7c530eb3e976d4',
  TRENDING_URL: 'https://api.themoviedb.org/3/trending/movie/day',
  SEARCH_QUERY_URL: 'https://api.themoviedb.org/3/search/movie',
  SEARCH_ID_URL: 'https://api.themoviedb.org/3/movie',
};

export async function apiMoviesTranding() {
  axios.defaults.baseURL = `${options.TRENDING_URL}`;
  try {
    return await axios.get(``, {
      params: {
        api_key: options.API_KEY,
      },
    });
  } catch (error) {
    return error;
  }
}

export async function apiMoviesSearch(query) {
  axios.defaults.baseURL = `${options.SEARCH_QUERY_URL}`;
  try {
    return await axios.get(``, {
      params: {
        api_key: options.API_KEY,
        language: 'en-US',
        query: query,
      },
    });
  } catch (error) {
    return error;
  }
}

export async function apiMoviesById(movieId) {
  axios.defaults.baseURL = `${options.SEARCH_ID_URL}`;
  try {
    return await axios.get(`${movieId}`, {
      params: {
        api_key: options.API_KEY,
        language: 'en-US',
      },
    });
  } catch (error) {
    return error;
  }
}

export async function apiMoviesCast(movieId) {
  axios.defaults.baseURL = `${options.SEARCH_ID_URL}`;
  try {
    return await axios.get(`${movieId}/credits`, {
      params: {
        api_key: options.API_KEY,
        language: 'en-US',
      },
    });
  } catch (error) {
    return error;
  }
}

export async function apiMoviesReviews(movieId) {
  axios.defaults.baseURL = `${options.SEARCH_ID_URL}`;
  try {
    return await axios.get(`${movieId}/reviews`, {
      params: {
        api_key: options.API_KEY,
        language: 'en-US',
      },
    });
  } catch (error) {
    return error;
  }
}
