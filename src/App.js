import SearchBar from './components/SearchBar/SearchBar';
import Users from './components/Users/Users';
import './App.css';
import { useEffect, useState } from 'react';
import NoResult from './components/NoResult/NoResult';

const API = "https://users-app-backend.onrender.com/users"

function App() {
  const [ users, setUsers ] = useState([]);
  const [ searchInput, setSearchInput ] = useState("");
  const [ expanded, setExpanded ] = useState([])

  // TODO: Fetch data here
  useEffect(()=> {
    async function fetchData() {
      try {
        const response = await fetch(`${API}`);
        const json = await response.json();
        const { data } = json;

        setUsers(data);

      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData();
  }, [])

  

  let dataToDisplay = users;

  if(searchInput) {
    dataToDisplay = users.filter(user => {
      const { name } = user;
      return name.toLowerCase().includes(searchInput.toLowerCase());
    })
  }

  const handleToggleExpanded = (id) => {
    if(!expanded.includes(id)) {
      const newExpanded = [...expanded, id];
      setExpanded(newExpanded);
    } else {
      const removed = expanded.filter(currId => currId !== id);
      setExpanded(removed);
    }
  }

  const handleExpandAll = () => {
    const allIds = users.map(user => user.id);
    setExpanded(allIds);
  }

  const handleCollapseAll = () => {
    setExpanded([]);
  }


  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar 
        searchInput={searchInput} 
        setSearchInput={setSearchInput} 
      />
        <button onClick={handleExpandAll}>Expand All</button>
        <button onClick={handleCollapseAll}>Collapse All</button>
      {!dataToDisplay.length ? 
        <NoResult searchInput={searchInput} /> :
        <Users 
          users={dataToDisplay} 
          searchInput={searchInput} 
          expanded={expanded} 
          handleToggleExpanded={handleToggleExpanded}
        />
      }
    </div>
  );
}

export default App;
