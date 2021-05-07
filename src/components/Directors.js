import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(makeDirector)}
    </div>
  );
}

const makeDirector = (dir, key) => {
  return (
    <div key={key}>
      {dir.name}
      <ul>
        {dir.movies.map((movie, index) => <li key={index}>{movie}</li>)}
      </ul>
    </div>
  );
}

export default Directors
