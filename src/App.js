import SearchBar from './components/SearchBar/SearchBar';
import Users from './components/Users/Users';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  // hooks
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  // TODO: Fetch data here
  useEffect(() => {
    axios.get('https://users-app-backend.onrender.com/users')
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => console.log(error))
  }, []);

  // console.log("searchInput:", searchInput);

  // filter the users that match the `searchInput`
  // the users data is an object
  let filteredData = users.data;
  // console.log("filteredData:", filteredData);

  if (searchInput){
      filteredData = users.data.filter(user => {
      const { name, country, company } = user;
      const validInput = `${name} ${country} ${company}`;
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
