import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [expanded, setExpanded] = useState([]);
  // TODO: Fetch data here
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function getUserData() {
      try {
        const data = await fetch(
          "https://users-app-backend.onrender.com/users"
        );
        const json = await data.json();
        setUserData(json.data);
      } catch (e) {
        console.log(e);
      }
    }
    getUserData();
  }, []);

  let dataToDisplay = userData;

  if (searchInput) {
    dataToDisplay = userData.filter((user) => {
      const { name, company, country } = user;
      let lowerCaseSearch = searchInput.toLowerCase();
      return (
        company.toLowerCase().includes(lowerCaseSearch) ||
        name.toLowerCase().includes(lowerCaseSearch) ||
        country.toLowerCase().includes(lowerCaseSearch)
      );
    });
  }

  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <button
        onClick={() => {
          setExpanded(userData.map((ele) => ele.id));
        }}
      >
        Expand All
      </button>
      <button
        onClick={() => {
          setExpanded([]);
        }}
      >
        Collapse All
      </button>

      <Users
        expanded={expanded}
        setExpanded={setExpanded}
        users={dataToDisplay}
      />
    </div>
  );
}

export default App;
