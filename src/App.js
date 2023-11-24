import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main/Index";

import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp"

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<SignUp />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;