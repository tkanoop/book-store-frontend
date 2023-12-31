import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import * as api from "../API/API"

const SignUp = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const { setAuth } = useAuth()

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'https://book-store-backend-production-8e74.up.railway.app/api/users';
      const { data: res } = await axios.post(url, data);
      navigate('/login');
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    const authenticationFunction = async () => {
      try {
        const user = await api.authenticate()
        setAuth({ id: user.data.id })
        navigate('/')
      }
      catch (err) {
        console.log('signup');
      }
    }
    authenticationFunction()
  }, [])
  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="left">
          <h1 className="text-white text-2xl">Welcome Back</h1>
          <Link to="/login">
            <button className="white_btn mt-4">Sign in</button>
          </Link>
        </div>
        <div className="right">
          <form className="form_container" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-extrabold">Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className="input"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="input"
            />
            {error && <div className="error_msg">{error}</div>}
            <button type="submit" className="green_btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
