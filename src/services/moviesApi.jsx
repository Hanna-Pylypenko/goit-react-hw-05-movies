import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY_TEMPL = '?api_key=9bff41db57042f21e241625af111febf';
const POSTER_URL = 'https://image.tmdb.org/t/p/original';
const END_POINTS = {
  TRENDING: 'trending/all/day',
  SEARCH: 'search/movie',
  MOVIE_DETAILS: 'movie/',
  CAST: '/credits',
  REVIEWS: '/reviews',
};
axios.defaults.baseURL = BASE_URL;
const getTrendingMovies = async () => {
  try {
    const response = await axios.get(END_POINTS.TRENDING + API_KEY_TEMPL);
    if (response.status === 200) {
      return response;
    }

    throw new Error(response);
  } catch (error) {}
};
const getSearchedMovie = async query => {
  try {
    const response = await axios.get(
      END_POINTS.SEARCH + API_KEY_TEMPL + '&query=' + query
    );

    if (response.status === 200) {
      return response;
    }

    throw new Error(response);
  } catch (error) {
    return;
  }
};
const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      END_POINTS.MOVIE_DETAILS + movieId + API_KEY_TEMPL
    );

    if (response.status === 200) {
      return response;
    }

    throw new Error(response);
  } catch (error) {
    return;
  }
};
const getMovieCast = async movieId => {
  try {
    const response = await axios.get(
      END_POINTS.MOVIE_DETAILS + movieId + END_POINTS.CAST + API_KEY_TEMPL
    );

    if (response.status === 200) {
      return response;
    }
    console.log(response);
    throw new Error(response);
  } catch (error) {
    return;
  }
};
const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      END_POINTS.MOVIE_DETAILS + movieId + END_POINTS.REVIEWS + API_KEY_TEMPL
    );
    if (response.status === 200) {
      return response;
    }

    throw new Error(response);
  } catch (error) {
    return;
  }
};
export const moviesApi = {
  getTrendingMovies,
  getSearchedMovie,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
  POSTER_URL,
};
