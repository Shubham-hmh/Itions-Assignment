

// MovieList.js
import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8;

  // Logic to calculate indexes for current page
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Logic to change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (  
<>
  <div className="movie-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {currentMovies.map((movie) => (
      <MovieCard key={movie.imdbmovieid} movie={movie} />
    ))}
  </div>

  {/* Pagination */}
  <div className="pagination flex justify-center mt-4">
    <button
      onClick={() => paginate(currentPage - 1)}
      disabled={currentPage === 1}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-full mr-2"
    >
      {'<< Prev'}
    </button>

    <span className="text-gray-700 font-bold py-2 px-4">
      Page {currentPage} of {Math.ceil(movies.length / moviesPerPage)}
    </span>

    <button
      onClick={() => paginate(currentPage + 1)}
      disabled={currentPage === Math.ceil(movies.length / moviesPerPage)}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-full ml-2"
    >
      {'Next >>'}
    </button>
  </div>
</>


  );
};

export default MovieList;
