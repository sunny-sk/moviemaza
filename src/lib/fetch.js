import axios from 'axios';

export const getTrending = async () => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.themoviedbApiKey}`
    );

    let tempMovies = [];
    if (res.data.results.length > 0) {
      tempMovies = [...res.data.results];
    }
    return { data: tempMovies, error: null };
  } catch (error) {
    console.log(error);
  }
};

export const getMoreTrendingData = async (page) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.themoviedbApiKey}&page=${page}`
    );
    let tempMovies = [];
    if (res.data.results) {
      tempMovies = [...res.data.results];
    }
    return { data: tempMovies, error: null };
  } catch (error) {
    console.log(error);
  }
};
export const getUpcoming = async () => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.themoviedbApiKey}`
    );

    let tempMovies = [];
    if (res.data.results.length > 0) {
      tempMovies = [...res.data.results];
    }
    return { data: tempMovies, error: null };
  } catch (error) {
    console.log(error);
  }
};

export const getMoreUpcoming = async (page) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.themoviedbApiKey}&page=${page}`
    );
    let tempMovies = [];
    if (res.data.results) {
      tempMovies = [...res.data.results];
    }
    return { data: tempMovies, error: null };
  } catch (error) {
    console.log(error);
  }
};

export const searchMovie = async (searchKey) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.themoviedbApiKey}&language=en-US&query=${searchKey}`
    );
    if (res.data.results) {
      const tempMovies = [...res.data.results];
      return { data: tempMovies, error: null };
    }
  } catch (error) {
    console.log(error);
  }
};

export const getMoreSearchMovie = async (searchKey, page) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.themoviedbApiKey}&language=en-US&query=${searchKey}&page=${page}`
    );
    if (res.data.results) {
      const tempMovies = [...res.data.results];
      return { data: tempMovies, error: null };
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllDownloadLink = async () => {
  try {
    const res = await axios.get('https://movieemaza.firebaseio.com/post.json');

    const tranformedData = [];
    for (const key in res.data) {
      tranformedData.push({ ...res.data[key], id: key });
    }
    return { data: tranformedData, error: null };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDetails = async (id) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.themoviedbApiKey}&append_to_response=videos,images`
    );
    if (res.data) {
      return { data: res.data, error: null };
    } else {
      // return error here
    }
  } catch (error) {
    return { data: null, message: error.message, error };
  }
};

export const fetchSecondDetails = async (imdb_id) => {
  try {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=${process.env.omdbApiKey}&i=${imdb_id}`
    );
    if (res.data) {
      return { data: res.data, error: null };
    } else {
      // return error here
    }
  } catch (error) {
    return { data: null, message: error.message, error };
  }
};
