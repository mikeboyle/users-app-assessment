import User from "../User/User";
import "./Users.css";

const Users = ({ users = [], expanded, handleToggleExpanded }) => {
	return (
		<article className="Users">
			{users.map((user) => {
				const { id } = user;
				return (
					<User
						key={id}
						user={user}
						isExpanded={expanded.includes(user.id)}
						handleToggleExpanded={() =>
							handleToggleExpanded(user.id)
						}
					/>
				);
			})}
		</article>
	);
};

export default Users;
