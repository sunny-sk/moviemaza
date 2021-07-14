/* eslint-disable react/prop-types */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';

import MovieList from '@/components/Movie/MovieList';
import SearchBox from '@/components/SeachBox';
import { getMoreSearchMovie, searchMovie } from '@/lib/fetch';
const DefaultSeachMovie = 'home';
const Movies = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState(props.movies);
  const router = useRouter();
  const getMoreData = async () => {
    try {
      const nextPage = currentPage + 1;
      const searchMovieByName = router.query['search'] ?? 'home';
      const { data, error } = await getMoreSearchMovie(
        searchMovieByName,
        nextPage
      );
      if (!error) {
        setMovies((prevM) => [...prevM, ...data]);
        setCurrentPage((cp) => cp + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async (searchKey) => {
    try {
      const { data, error } = await searchMovie(searchKey);
      if (!error) {
        setMovies(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (router.query['search']) {
      getData(router.query['search']);
    } else {
      getData(DefaultSeachMovie);
    }
  }, [router]);

  const onSearchHandler = (search) => {
    router.push(`/movies?search=${search}`);
  };

  return (
    <>
      <SearchBox onSearch={onSearchHandler} />
      <br />
      <ScrollToTop smooth color="#6f00ff" />
      <MovieList movies={movies} getMoreData={getMoreData} />
    </>
  );
};

export default Movies;

export async function getStaticProps() {
  const { data, error } = await searchMovie(DefaultSeachMovie);
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
