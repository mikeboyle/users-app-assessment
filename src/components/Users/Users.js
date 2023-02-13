import User from "../User/User";
import "./Users.css";

const Users = ({ users, setExpanded, expanded }) => {  
  const handleExpanded = (id) => {
    if (expanded.includes(id)) {
      setExpanded(expanded.filter((userId) => userId !== id));
    } else {
      setExpanded([...expanded, id]);
    }
  };

  return (
    <article className="Users">
      {users.map((user) => {
        const { id } = user;
        return (
          <User
            key={id}
            user={user}
            handleExpanded={handleExpanded}
            expanded={expanded}
          />
        );
      })}
    </article>
  );
};

export default Users;
