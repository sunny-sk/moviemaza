/* eslint-disable react/prop-types */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import classes from './MovieItem.module.scss';
const MovieItem = ({ movie }) => {
  return (
    <div
      data-id={movie.id}
      className={`col-xs-2 mb-5 ${classes['movie-frame']}`}>
      <Link href={`/${movie.id}`}>
        <div className={classes['card']}>
          <div className="inner-image">
            <Image
              src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
              width={500}
              height={750}
              className="card-img-top"
              alt={movie.title || movie.original_name || movie.original_title}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              {movie.title || movie.original_name || movie.original_title}
              <small className="form-text text-muted">
                {movie?.release_date}
              </small>
            </h5>
            <small className="form-text text-muted">
              Rating: {movie.vote_average}
            </small>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default React.memo(MovieItem);
