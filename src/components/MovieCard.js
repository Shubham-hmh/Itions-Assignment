// MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card bg-white shadow-md rounded-md p-4">
      <img className="rounded-md mb-4" src={movie.moviemainphotos[0]} alt={movie.movietitle} />
      <h2 className="text-lg font-bold mb-2">{movie.movietitle}</h2>
      <p className="text-sm mb-2"><span className="font-semibold">Languages:</span> {movie.movielanguages.join(', ')}</p>
      <p className="text-sm mb-2"><span className="font-semibold">Countries:</span> {movie.moviecountries.join(', ')}</p>
      <p className="text-sm mb-2"><span className="font-semibold">Genres:</span> {movie.moviegenres.join(', ')}</p>
    </div>
  );
};

export default MovieCard;
