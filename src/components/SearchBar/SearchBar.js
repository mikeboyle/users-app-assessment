import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ searchInput, setSearchInput }) => {
  
  const handleChange =(e)=> {
    setSearchInput(e.target.value)
  }

  return (
    <input 
      type="text" 
      value={searchInput}
      placeholder="Search by name, country, or company"
      onChange={handleChange}
    />
  );
};

export default SearchBar;
