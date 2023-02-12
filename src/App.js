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

  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar 
        searchInput={searchInput} 
        setSearchInput={setSearchInput}
      />
      <Users 
        filteredData={filteredData}
      />
    </div>
  );
}

export default App;
