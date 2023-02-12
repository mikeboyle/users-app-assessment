import './SearchBar.css';

const SearchBar = ({ searchInput, handleTextChange }) => {

  return (
    <input 
      type="text" 
      placeholder="Search by name, country, or company" 
      value={searchInput}
      onChange={handleTextChange}
    />
  );
};

export default SearchBar;
