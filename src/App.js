

import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import FilterPanel from './components/FilterPanel';
import data from './data.json';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [countries, setCountries] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Fetch movies data here
    // Update state with fetched data
    setMovies(data);
    setFilteredMovies(data);

    // Extract languages, countries, and genres from data
    const allLanguages = [...new Set(data.flatMap(movie => movie.movielanguages))];
    const allCountries = [...new Set(data.flatMap(movie => movie.moviecountries))];
    const allGenres = [...new Set(data.flatMap(movie => movie.moviegenres))];

    // Set languages, countries, and genres state
    setLanguages(allLanguages);
    setCountries(allCountries);
    setGenres(allGenres);
  }, []);

  const handleFilter = (filters) => {
    let filtered = [...movies];

    if (filters.language) {
      filtered = filtered.filter(movie =>
        movie.movielanguages.includes(filters.language)
      );
    }

    if (filters.country) {
      filtered = filtered.filter(movie =>
        movie.moviecountries.includes(filters.country)
      );
    }

    if (filters.genre) {
      filtered = filtered.filter(movie =>
        movie.moviegenres.includes(filters.genre)
      );
    }

    setFilteredMovies(filtered);
  };

  return (
    <div className="app-container m-8">
      <FilterPanel onFilter={handleFilter} languages={languages} countries={countries} genres={genres} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
