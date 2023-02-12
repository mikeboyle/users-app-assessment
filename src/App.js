import SearchBar from './components/SearchBar/SearchBar';
import Users from './components/Users/Users';
import './App.css';
import { useEffect, useState } from 'react';
import NoResult from './components/NoResult/NoResult';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';

const API = "https://users-app-backend.onrender.com/users"

function App() {
  const [ users, setUsers ] = useState([]);
  const [ searchInput, setSearchInput ] = useState("");
  const [ expanded, setExpanded ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState("");

  // TODO: Fetch data here
  useEffect(()=> {
    async function fetchData() {
      try {
        setError("");
        setLoading(true);
        const response = await fetch(`${API}`);
        const json = await response.json();
        const { data, error } = json;
        if(response.ok) {
          setUsers(data);
          setLoading(false);
        } else {
          setError(error);
          setLoading(false);
        }
        
      } catch (error) {
        setError(error.meassage);
        setLoading(false);
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

  const renderContent = () => {
    if(loading) {
      return <Loading />
    } else if(error) {
      return <Error error={error} />
    } else {
      return <Users 
      users={dataToDisplay} 
      searchInput={searchInput} 
      expanded={expanded} 
      handleToggleExpanded={handleToggleExpanded}
    />
    }
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
        renderContent()
      }
    </div>
  );
}

export default App;
