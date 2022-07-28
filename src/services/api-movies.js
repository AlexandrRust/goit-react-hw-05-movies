import axios from 'axios';
import { API_KEY, BASE_URL } from 'constants/api-options';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// trending / movie / day;

const notify = message => {
  return toast.error(`${message}`, {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export async function apiMoviesTranding() {
  axios.defaults.baseURL = `${BASE_URL}`;
  try {
    return await axios.get(`trending/movie/day`, {
      params: {
        api_key: API_KEY,
      },
    });
  } catch (error) {
    return notify(error.message);
  }
}

export async function apiMoviesSearch(query) {
  axios.defaults.baseURL = `${BASE_URL}`;
  try {
    return await axios.get(`search/movie`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        query: query,
      },
    });
  } catch (error) {
    return notify(error.message);
  }
}

export async function apiMoviesById(movieId) {
  axios.defaults.baseURL = `${BASE_URL}`;
  try {
    return await axios.get(`movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
  } catch (error) {
    return notify(error.message);
  }
}

export async function apiMoviesCast(movieId) {
  axios.defaults.baseURL = `${BASE_URL}`;
  try {
    return await axios.get(`movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
  } catch (error) {
    return notify(error.message);
  }
}

export async function apiMoviesReviews(movieId) {
  axios.defaults.baseURL = `${BASE_URL}`;
  try {
    return await axios.get(`movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
  } catch (error) {
    return notify(error.message);
  }
}
