import "./SearchBar.scss";

const SearchBar = ({ searchInput, setSearchInput }) => {
  const handleOnChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchInput}
      onChange={handleOnChange}
      placeholder="Search by name, country, or company"
    />
  );
};

export default SearchBar;
