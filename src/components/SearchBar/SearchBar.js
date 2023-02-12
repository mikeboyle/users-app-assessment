import './SearchBar.css';

const SearchBar = ({ searchInput, setSearchInput }) => {

  const handleTextChange = (e) => {
    setSearchInput(e.target.value);
  }

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
