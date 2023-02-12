import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import axios from "axios";
import "./App.scss";

function App() {
  const API = process.env.REACT_APP_API_URL;
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [expanded, setExpanded] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // TODO: Fetch data here
  useEffect(() => {
    getUsers();
  }, []); // eslint-disable-line

  const getUsers = async () => {
    try {
      setError("");
      setLoading(true);
      await axios
        .get(`${API}/users`)
        .then((res) => {
          setLoading(false);
          setUsers(res.data.data);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const handleExpandAll = () => {
    const allIds = users.map((user) => user.id);
    window.localStorage.setItem("usersList", JSON.stringify(allIds));
    setExpanded(allIds);
  };

  const handleCollapseAll = () => {
    window.localStorage.setItem("usersList", JSON.stringify([]));
    setExpanded([]);
  };

  return (
    <div className="App">
      <h1>Our Users</h1>
      <div className="searchBar_controls">
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />

        <Button onClick={handleExpandAll} variant="success">
          Expand All
        </Button>

        <Button onClick={handleCollapseAll} variant="danger">
          Collapse All
        </Button>
      </div>

      <Users
        users={users}
        searchInput={searchInput}
        expanded={expanded}
        setExpanded={setExpanded}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;
