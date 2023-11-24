import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main/Index";

import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp"
import ResetPassword from "./components/ResetPassword/ResetPassword";
import UserProfile from "./pages/UserProfile";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<SignUp />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/forgotpassword" exact element={<ResetPassword />} />
			<Route path="/user-profile" exact element={<UserProfile />} />
		</Routes>
	);
}

export default App;