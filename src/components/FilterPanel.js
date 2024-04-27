// FilterPanel.js
import React, { useState } from 'react';

const FilterPanel = ({ onFilter, languages, countries, genres }) => {
  const [filters, setFilters] = useState({
    language: '',
    country: '',
    genre: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <div className="filter-panel p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">Filter Movies</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="language" className="block mb-2">Language:</label>
          <select id="language" name="language" value={filters.language} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">All</option>
            {languages?.map((language, index) => (
              <option key={index} value={language}>{language}</option>
            ))}
          </select>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="country" className="block mb-2">Country:</label>
          <select id="country" name="country" value={filters.country} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">All</option>
            {countries?.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="genre" className="block mb-2">Genre:</label>
          <select id="genre" name="genre" value={filters.genre} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">All</option>
            {genres?.map((genre, index) => (
              <option key={index} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Apply Filters</button>
      </form>
    </div>
  );
};

export default FilterPanel;
