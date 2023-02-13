import React, { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import Users from "./components/Users/Users";
import Loading from "./components/loading/Loading";
import Error from "./components/error/Error";
import "./App.css";

const API = "https://users-app-backend.onrender.com/users";
function App() {
	// TODO: Fetch data here
	const [users, setUsers] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [expanded, setExpanded] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		async function getUserData() {
			try {
				setError("");
				setLoading(true);
				const response = await fetch(API);
				const json = await response.json();
				const { data, error } = json;
				if (response.ok) {
					setUsers(data);
					setLoading(false);
				} else {
					setError(error);
					setLoading(false);
				}
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		}
		getUserData();
	}, []);

	let dataToDisplay = users;

	if (searchInput) {
		dataToDisplay = users.filter((user) => {
			return (
				user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
				user.country
					.toLowerCase()
					.includes(searchInput.toLowerCase()) ||
				user.company.toLowerCase().includes(searchInput.toLowerCase())
			);
		});
	}
	const handleExpandAll = () => {
		const allIds = dataToDisplay.map((user) => user.id);
		setExpanded(allIds);
	};

	const handleCollapseAll = () => {
		setExpanded([]);
	};

	const handleToggleExpanded = (id) => {
		if (!expanded.includes(id)) {
			const newExpanded = [...expanded, id];
			setExpanded(newExpanded);
		} else {
			const removed = expanded.filter((currId) => currId !== id);
			setExpanded(removed);
		}
	};

	const renderContent = () => {
		if (loading) {
			return <Loading />;
		} else if (error) {
			return <Error error={error} />;
		} else {
			return (
				<Users
					users={dataToDisplay}
					expanded={expanded}
					handleToggleExpanded={handleToggleExpanded}
				/>
			);
		}
	};
	console.log(users);
	return (
		<div className="App">
			<h1>Our Users</h1>
			<div className="App__input">
				<SearchBar
					searchInput={searchInput}
					setSearchInput={setSearchInput}
				/>
				<button className="button-19" onClick={handleExpandAll}>
					Expand All
				</button>
				<button className="button-19" onClick={handleCollapseAll}>
					Collapse All
				</button>
			</div>
			{dataToDisplay.length ? (
				renderContent()
			) : (
				<div className="users__content--center">
					No results for {searchInput}
				</div>
			)}
		</div>
	);
}

export default App;
