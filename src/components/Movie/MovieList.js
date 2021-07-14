/* eslint-disable react/prop-types */
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import MovieItem from '@/components/Movie/MovieItem';

import MoreLoader from '../Loader/MoreLoader';

const MovieList = ({ movies = [], getMoreData }) => {
  if (movies.length === 0) {
    return (
      <div className="container">
        <br />
        <br />
        <div className="text-center">
          <div className="jumbotron">
            <h4 style={{ color: 'white' }}>No Movie Found</h4>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
  return (
    <div className="container">
      <br />
      <br />
      <InfiniteScroll
        className="row"
        dataLength={movies.length}
        next={getMoreData}
        hasMore={true}
        loader={<MoreLoader />}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default MovieList;
