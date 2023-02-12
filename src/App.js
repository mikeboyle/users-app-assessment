import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import "./App.css";
import { useEffect, useState } from "react";
import React from "react";

const API_URL = "https://users-app-backend.onrender.com/users";

function App() {
  // TODO: Fetch data here
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setUsers(users.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const displayUsers = users.filter((user) => {
    const inputCaseInsensitive = input.toLowerCase();
    return (
      user.name.toLowerCase().includes(inputCaseInsensitive) ||
      user.country.toLowerCase().includes(inputCaseInsensitive) ||
      user.company.toLowerCase().includes(inputCaseInsensitive)
    );
  });

  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar input={input} setInput={setInput} />
      <Users users={displayUsers} />
    </div>
  );
}

export default App;
