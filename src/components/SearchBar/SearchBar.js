import React, { useState } from 'react'
import './SearchBar.css';

const SearchBar = () => {

  const [ searchInput, setSearchInput ] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }
  
  return (
    <input 
    type="text" 
    placeholder="Search by name, country, or company" 
    value={searchInput}
    onChange={handleChange}/>
  );
};

export default SearchBar;
