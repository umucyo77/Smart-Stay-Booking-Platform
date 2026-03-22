import React, { useContext } from 'react';
import { FilterContext } from '../../context/FilterContext';
import { formatPrice } from '../../utils/dataTransformers';

const SideBar = () => {
  const { filters, updateFilter, resetFilters } = useContext(FilterContext);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button
          onClick={resetFilters}
          className="text-primary text-sm hover:underline"
        >
          Reset All
        </button>
      </div>
      
      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Max Price per Night
        </label>
        <input
          type="range"
          min="0"
          max="500"
          step="10"
          value={filters.maxPrice || 500}
          onChange={(e) => updateFilter('maxPrice', parseInt(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>$0</span>
          <span>{formatPrice(filters.maxPrice || 500)}</span>
        </div>
      </div>
      
      {/* Rating Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Minimum Rating
        </label>
        <select
          value={filters.minRating || ''}
          onChange={(e) => updateFilter('minRating', e.target.value ? parseFloat(e.target.value) : null)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Any</option>
          <option value="4.5">4.5+</option>
          <option value="4.0">4.0+</option>
          <option value="3.5">3.5+</option>
          <option value="3.0">3.0+</option>
        </select>
      </div>
      
      {/* Bedrooms */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Bedrooms
        </label>
        <select
          value={filters.bedrooms || 0}
          onChange={(e) => updateFilter('bedrooms', parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="0">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>
      
      {/* Guests */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Guests
        </label>
        <input
          type="number"
          min="1"
          max="10"
          value={filters.guests || 1}
          onChange={(e) => updateFilter('guests', parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </div>
  );
};

export default SideBar;