import User from '../User/User';
import './Users.css';

const Users = ({ users = [] }) => {
  return (
    <article className="Users">
      {users.map((user) => {
        const { id } = user;
        return <User key={id} user={user} />;
      })}
    </article>
  );
};

export default Users;
