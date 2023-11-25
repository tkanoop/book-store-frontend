import { Route, Routes, Navigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";

import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp"
import ResetPassword from "./components/ResetPassword/ResetPassword";
import UserProfile from "./pages/UserProfile";
import Footer from "./components/Footer/Footer";
import { useEffect } from 'react'
import useBookContext from './hooks/use-books-context'
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import CartPage from "./pages/CartPage";

function App() {
	const user = localStorage.getItem("token");

	


	return (
		<Routes>
			{user && <Route path="/" exact element={<Home />} />}
			<Route path="/signup" exact element={<SignUp />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/forgotpassword" exact element={<ResetPassword />} />
			<Route path="/user-profile" exact element={<UserProfile />} />
			<Route path="/product/:_id" element={<SingleProduct/>} />
			<Route path="/cart" element={<CartPage/>} />
		</Routes>
	);
}

export default App;