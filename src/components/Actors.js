import React from 'react';
import { act } from 'react-test-renderer';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(makeActor)}
    </div>
  );
};

const makeActor = (actor, key) => {
  return (
    <div key={key}>
      {actor.name}
      <ul>
        {actor.movies.map((movie, index) => <li key={index}>{movie}</li>)}
      </ul>
    </div>
  );
}

export default Actors;