import "./SearchBar.css";

const SearchBar = ({ input, setInput }) => {
  return (
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Search by name, country, or company"
    />
  );
};

export default SearchBar;
