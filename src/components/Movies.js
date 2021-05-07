import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(makeMovie)}
    </div>
  );
};

const makeMovie = (movie, key) => {
  return (
    <div key={key}>
      {`${movie.title} | ${movie.time} minutes`}
      <ul>
        {movie.genres.map((genre, index) => <li key={index} >{genre}</li>)}
      </ul>
    </div>
  );
}

export default Movies;
