import SearchBar from './components/SearchBar/SearchBar';
import Users from './components/Users/Users';
import './App.css';

function App() {
  // TODO: Fetch data here

  return (
    <div className="App">
      <h1>Our Users</h1>
      <SearchBar />
      <Users />
    </div>
  );
}

export default App;
