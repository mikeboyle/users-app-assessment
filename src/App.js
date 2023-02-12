import SearchBar from './components/SearchBar/SearchBar';
import Users from './components/Users/Users';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  // hooks
  const [users, setUsers] = useState([]);

  // TODO: Fetch data here
  useEffect(() => {
    axios.get('https://users-app-backend.onrender.com/users')
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => console.log(error))
  }, []);

  // console.log("users:", users)

  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar />
      <Users />
    </div>
  );
}

export default App;
