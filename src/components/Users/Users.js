import User from '../User/User';
import './Users.css';

const Users = ({ filteredData }) => {
  return (
    <article className="Users">
      {filteredData.map((user) => {
        const { id } = user;
        return <User key={id} user={user} />;
      })}
    </article>
  );
};

export default Users;
