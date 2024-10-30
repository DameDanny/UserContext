import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function UserProfile() {
	const { isOnline, setOnline } = useContext(UserContext);
	return (
		<>
			<p>User is </p>
			{isOnline ? <p>Online</p> : <p>Not Online</p>}

			<button type="button" onClick={() => setOnline(!isOnline)}>
				click to change user status
			</button>
		</>
	);
}

export default UserProfile;
