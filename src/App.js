import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";

import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import UserProfile from "./pages/UserProfile";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import useBookContext from "./hooks/use-books-context";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import CartPage from "./pages/CartPage";
import ProtectedRouter from "./components/Router/ProtectedRouter";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" exact element={<Navigate replace to="/login" />} />
      <Route path="/forgotpassword" exact element={<ResetPassword />} />

      <Route path="/user-profile" exact element={<UserProfile />} />
      <Route path="/product/:_id" exact element={<SingleProduct />} />
      <Route path="/cart" exact element={<CartPage />} />
      <Route path="/success" exact element={<OrderSuccess/>}/>
    </Routes>
  );
}

export default App;
