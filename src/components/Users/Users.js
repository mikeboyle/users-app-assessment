import User from "../User/User";
import "./Users.css";

const Users = ({ users, setExpanded, expanded }) => {  
  const handleExpanded = (id) => {
    let copyExpaned = expanded;

    if (copyExpaned.includes(id)) {
      setExpanded(copyExpaned.filter((userId) => userId !== id));
    } else {
      setExpanded([...copyExpaned, id]);
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
            setExpanded={setExpanded}
          />
        );
      })}
    </article>
  );
};

export default Users;
