/* eslint-disable react/prop-types */
import Head from 'next/head';
/* eslint-disable react/prop-types */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { fetchDetails, fetchSecondDetails, getTrending } from '@/lib/fetch';

const MovieDetails = ({ data: details }) => {
  if (!details) {
    return <p>Data Not Found</p>;
  }
  // const [details, setDetails] = useState({
  //   imagePath: null,
  //   name: null,
  //   tagLine: null,
  //   movieId: null,
  //   language: null,
  //   runtime: null,
  //   ratings: [],
  //   releaseDate: null,
  //   actors: null,
  //   categories: [],
  //   description: null,
  //   overview: null,
  //   images: [],
  // });
  // const [isLoading, setIsLoading] = useState(true);
  // const router = useRouter();

  // const getData = async (id) => {
  //   setIsLoading(true);
  //   const res = await fetchDetails(id);
  //   const res1 = await fetchSecondDetails(res.imdb_id);
  //   setIsLoading(false);

  //   const data = {
  //     movieId: id,
  //     language: res.original_language,
  //     imagePath: res.poster_path,
  //     runtime: res.runtime,
  //     tagLine: res.tagline,
  //     overView: res.overview,
  //     releaseDate: res.release_date,
  //     name: res.original_title,
  //     type: res1.Type,
  //     actors: res1.Actors,
  //     ratings: [...res1.Ratings],
  //     categories: [],
  //   };
  //   const categories = [];
  //   const images = [];
  //   for (const genere of res.genres) {
  //     categories.push(genere.name);
  //   }

  //   if (res.images.backdrops.length > 10) {
  //     for (let i = 1; i <= 10; i++) {
  //       images.push(res.images.backdrops[i].file_path);
  //     }
  //   } else {
  //     for (const image of res.images.backdrops) {
  //       images.push(image.file_path);
  //     }
  //   }

  //   data.categories = categories;
  //   data.images = images;

  //   setDetails(data);
  // };

  // useEffect(() => {
  //   if (router.query.movieId) {
  //     getData(router.query.movieId);
  //   }
  // }, [router.query.movieId]);
  console.log(`https://image.tmdb.org/t/p/w500/${details.imagePath}`);
  const myLoader = () => {
    return `https://image.tmdb.org/t/p/w400/${details.imagePath}`;
  };
  return (
    <>
      <Head>
        <title>
          {details.name} - {details.tagLine}
        </title>
        <meta name="description" content={details.overView} />
        <meta
          name="keywords"
          content="Movie, movieemaza, latest movies, movie listings"
        />
        <meta name="author" content={details.actors} />
      </Head>
      <div className="container ">
        <div className="row">
          {/* poster image  */}
          <div className="col-sm-12 col-md-7 col-lg-5 ">
            <Image
              loader={myLoader}
              className="ml-2 img-fluid"
              width={500}
              height={650}
              src="/images/icon-192x192.png"
              alt={details.name}
            />
          </div>

          {/* details  */}
          <div className="col-sm-12 col-md-5 col-lg-7 ">
            <div className="container">
              <h1 className="mb-1 mt-3">{details.name}</h1>
              <small style={{ fontSize: '20px' }}>{details.tagLine}</small>
              <br />
              <span>({details.releaseDate})</span>
              <div className="my-4">
                <h6>Movie Id : {details.movieId}</h6>
                <h6>Lang : {details.language}</h6>
                <h6>Runtime : {details.runtime} min</h6>
                <h6>Actors : {details.actors}</h6>
              </div>

              <div>
                <small style={{ color: 'whitesmoke' }}>Ratings</small>
                <ul className="mt-1 list-group">
                  {details.ratings.map((e) => {
                    return (
                      <li key={e.value} className="p-2 list-group-item">
                        {e.Source} : {e.Value}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="mt-2">
                {details.genres.map((genre) => {
                  return (
                    <span
                      key={genre}
                      className="mt-3 mr-3 p-2 badge badge-danger">
                      {genre}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        {/*  description */}
        <div>
          <span className="badge badge-warning mb-3">
            <i style={{ color: 'white' }} className="fa fa-pencil"></i>{' '}
            Description
          </span>
          <p>{details.overView}</p>
        </div>

        {/* <!-- clips/images of movies --> */}
        <div className="x">
          <div className="row">
            <div className="col-xs-12 x">
              {details.images.map((image) => {
                return (
                  <img
                    key={image}
                    style={{ maxHeight: '19rem' }}
                    className="x ml-2 mb-2 p-2"
                    src={'https://image.tmdb.org/t/p/w200/' + image}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default MovieDetails;

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const { data, error } = await getTrending();
  let paths = data.map((e) => ({
    params: {
      movieId: toString(e.id),
    },
  }));

  // Get the paths we want to pre-render based on posts

  return { paths, fallback: 'blocking' };
}

// This function gets called at build time
export async function getStaticProps(ctx) {
  const {
    params: { movieId },
  } = ctx;
  let movieData = {};

  const { data: res, error: error1 } = await fetchDetails(movieId);
  if (error1) {
    //
    return {
      props: {
        data: null,
      },
    };
  }

  const { data: res1, error: error2 } = await fetchSecondDetails(res.imdb_id);
  if (!error2) {
    //
    movieData = {
      movieId,
      language: res.original_language,
      imagePath: res.poster_path,
      runtime: res.runtime,
      tagLine: res.tagline,
      overView: res.overview,
      releaseDate: res.release_date,
      name: res.original_title,
      type: res1.Type,
      actors: res1.Actors,
      ratings: [...res1.Ratings],
      categories: [],
    };
  } else {
    movieData = {
      movieId,
      language: res.original_language,
      imagePath: res.poster_path,
      runtime: res.runtime,
      tagLine: res.tagline,
      overView: res.overview,
      releaseDate: res.release_date,
      name: res.original_title,
      categories: [],
    };
  }

  const genres = [];
  const images = [];
  if (res.genres) {
    for (const genere of res.genres) {
      genres.push(genere.name);
    }
  }

  if (res.images && res.images.backdrops) {
    if (res.images.backdrops.length > 10) {
      for (let i = 1; i <= 10; i++) {
        images.push(res.images.backdrops[i].file_path);
      }
    } else {
      for (const image of res.images.backdrops) {
        images.push(image.file_path);
      }
    }
  }

  movieData.genres = genres;
  movieData.images = images;
  return {
    props: {
      data: movieData,
    },
    revalidate: 60 * 120,
  };
}
