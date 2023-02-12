import User from "../User/User";
import "./Users.css";
import { useState } from "react";

const Users = ({ users = [] }) => {
  const [expand, setExpand] = useState([]);

  const handleExpand = (id) => {
    if (!expand.includes(id)) {
      const newExpand = [...expand, id];
      setExpand(newExpand);
    } else {
      const filteredExpand = expand.filter((currentId) => {
        return currentId !== id;
      });
      setExpand(filteredExpand);
    }
  };

  const expandAllHandler = () => {
    const expandAll = users.map((user) => {
      return user.id;
    });
    setExpand(expandAll);
  };

  const collapseAllHandler = () => {
    setExpand([]);
  };

  return (
    <article className="Users">
      <button onClick={expandAllHandler}>Expand All</button>
      <button onClick={collapseAllHandler}>Collapse All</button>
      {users.map((user) => {
        const { id } = user;
        return (
          <User
            key={id}
            user={user}
            expand={expand}
            handleExpand={() => {
              handleExpand(user.id);
            }}
          />
        );
      })}
    </article>
  );
};

export default Users;
