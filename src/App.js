import SearchBar from './components/SearchBar/SearchBar';
import Users from './components/Users/Users';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  // hooks
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [expanded, setExpanded] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // TODO: Fetch data here
  useEffect(() => {
    axios.get('https://users-app-backend.onrender.com/users')
      .then((response) => {
        setUsers(response.data.data);
        if (response){
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(true);
        setError("Error fetching data from API");
      })
  }, []);

  // filter the users that match the `searchInput`
  // the users data is an object
  let filteredData = users;

  if (searchInput){
    filteredData = users.filter(user => {
    const validInput = `${user.name} ${user.country} ${user.company}`;
    const validInputToLowerCase = validInput.toLowerCase();
    const searchInputToLowerCase = searchInput.toLowerCase();
    return validInputToLowerCase.includes(searchInputToLowerCase);
    });
  }

  // Expand All and Collapse All
  const handleExpandAll = () => {
    const allUserIds = users.map((user) => user.id);
    setExpanded(allUserIds);
  }

  const handleCollapseAll = () => {
    setExpanded([]);
  }

  // if loading state or error, don't display users. Else, display users.
  const renderContent = () => {
    if (loading){
      return <div>Loading...</div>
    } else if (error) {
      return <div>{error}</div>
    } else if (filteredData.length > 0) {
      return <Users 
          filteredData={filteredData}
          expanded={expanded}
          setExpanded={setExpanded}
        />
    } else {
      // if user input doesn't create filtered data, show no results message
      return <div>No results for {searchInput}</div>
    }
  }

  return (
    <div className="App">
      <h1>Our Users</h1>
      <div className="inputExpandContainer">
        <SearchBar 
          searchInput={searchInput} 
          setSearchInput={setSearchInput}
        />
        <button onClick={handleExpandAll} >Expand All</button>
        <button onClick={handleCollapseAll} >Collapse All</button>
      </div>
      {renderContent()}
    </div>
  );
}

export default App;
