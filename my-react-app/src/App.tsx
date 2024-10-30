import { useState } from "react";

import "./App.css";

import UserProfile from "./composents/UserProfile";
import UserContext from "./contexts/UserContext";

function App() {
	const [isOnline, setOnline] = useState(false);
	return (
		<>
			<UserContext.Provider
				value={{ isOnline: isOnline, setOnline: setOnline }}
			>
				<UserProfile />
			</UserContext.Provider>
		</>
	);
}

export default App;
