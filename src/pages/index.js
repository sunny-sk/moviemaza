/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';

import MovieList from '@/components/Movie/MovieList';
import { getMoreTrendingData, getTrending } from '@/lib/fetch';
const Trending = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState(props.movies);

  const getMoreData = async () => {
    const nextPage = currentPage + 1;
    const { data, error } = await getMoreTrendingData(nextPage);
    if (!error) {
      setMovies((prevM) => [...prevM, ...data]);
      setCurrentPage((cp) => cp + 1);
    }
  };
  const getData = async () => {
    const { data, error } = await getTrending();
    if (!error) {
      setMovies(data);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ScrollToTop smooth color="#6f00ff" />
      <MovieList movies={movies} getMoreData={getMoreData} />
    </>
  );
};
export default Trending;

export async function getStaticProps() {
  const { data, error } = await getTrending();
  let movies = [];
  if (!error) {
    movies = data;
  }
  return {
    props: {
      movies,
    },
    revalidate: 120,
  };
}
