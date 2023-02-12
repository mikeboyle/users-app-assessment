import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar/SearchBar';
import Users from './components/Users/Users';
import axios from 'axios';
import './App.css';

function App() {

  const [ users, setUsers ] = useState([]);
  const [expanded, setExpanded ] = useState([]);
  const [ searchInput, setSearchInput] = useState('');
  

  const { id } = users;
  // TODO: Fetch data here
  useEffect(() => {
    axios.get('https://users-app-backend.onrender.com/users')
    .then(res => setUsers(res.data.data))
    .catch(err => console.log(err))
  })

  return (

    <div className="App">
      <h1>Our Users</h1>
      <SearchBar />
      <Users users={users} expanded={expanded.includes(id)} setExpanded={setExpanded}/>
    </div>
  );
}

export default App;
