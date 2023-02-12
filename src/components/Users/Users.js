import { useEffect } from "react";
import User from "../User/User";
import "./Users.scss";

const Users = ({
  users = [],
  searchInput,
  expanded,
  setExpanded,
  loading,
  error,
}) => {
  useEffect(() => {
    const expandedList = window.localStorage.getItem("usersList");
    if (expandedList !== null) {
      setExpanded(JSON.parse(expandedList));
    }
  }, []); // eslint-disable-line

  const handleToggleExpanded = (id) => {
    if (!expanded.includes(id)) {
      const newExpanded = [...expanded, id];
      setExpanded(newExpanded);
      window.localStorage.setItem("usersList", JSON.stringify(newExpanded));
    } else {
      const removed = expanded.filter((userId) => userId !== id);
      setExpanded(removed);
      window.localStorage.setItem("usersList", JSON.stringify(removed));
    }
  };

  let usersToDisplay = users;

  if (searchInput) {
    usersToDisplay = users.filter((user) => {
      const { name, country, company } = user;
      return (
        name.toLowerCase().includes(searchInput.toLowerCase()) ||
        country.toLowerCase().includes(searchInput.toLowerCase()) ||
        company.toLowerCase().includes(searchInput.toLowerCase())
      );
    });
  }

  const renderUsers = () => {
    if (error) {
      return <div>ERROR: {error}</div>;
    }

    if (loading) {
      return (
        <div className="loading">
          <h3>Loading Users</h3>
          <div className="dots">
            <div className="dot1"></div>
            <div className="dot2"></div>
            <div className="dot3"></div>
          </div>
        </div>
      );
    }

    if (usersToDisplay.length < 1) {
      return <div>No results for {searchInput}.</div>;
    } else {
      return (
        <article className="Users">
          {usersToDisplay.map((user) => {
            const { id } = user;
            return (
              <User
                key={id}
                user={user}
                expanded={expanded.includes(user.id)}
                onClick={() => handleToggleExpanded(user.id)}
              />
            );
          })}
        </article>
      );
    }
  };
  return <article className="Users">{renderUsers()}</article>;
};

export default Users;
