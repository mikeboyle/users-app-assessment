import { useState } from 'react';
import User from '../User/User';
import './Users.css';

const Users = ({ filteredData }) => {
  const [expanded, setExpanded] = useState([]);

  const handleToggleExpanded = (id) => {
    if (!expanded.includes(id)){
      const expandedUser = [...expanded, id];
      setExpanded(expandedUser);
    } else {
      const removed = expanded.filter((currId) => currId !== id);
      setExpanded(removed);
    }
  }

  return (
    <article className="Users">
      {filteredData.map((user) => {
        const { id } = user;
        return <User 
          key={id} 
          user={user} 
          expanded={expanded.includes(id)}
          onClick={() => handleToggleExpanded(id)} 
        />;
      })}
    </article>
  );
};

export default Users;
