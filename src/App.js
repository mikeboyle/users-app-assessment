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

  // TODO: Fetch data here
  useEffect(() => {
    axios.get('https://users-app-backend.onrender.com/users')
      .then((response) => {
        // console.log("USE EFFECT->", response.data.data)
        setUsers(response.data.data)
      })
      .catch((error) => console.log(error))
  }, []);

  // console.log("searchInput:", searchInput);

  // filter the users that match the `searchInput`
  // the users data is an object
  let filteredData = users;
  // console.log("users:", users)
  
  // console.log("filteredData:", filteredData);
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
    console.log("expand all was clicked")
    const allUserIds = users.map((user) => user.id);
    setExpanded(allUserIds)

  }

  const handleCollapseAll = () => {
    console.log("collapse all was clicked")
    setExpanded([]);
  }

  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar 
        searchInput={searchInput} 
        setSearchInput={setSearchInput}
      />
      <button onClick={handleExpandAll} >Expand All</button>
      <button onClick={handleCollapseAll} >Collapse All</button>
      <Users 
        filteredData={filteredData}
        expanded={expanded}
        setExpanded={setExpanded}
      />
    </div>
  );
}

export default App;
