import './Login.css'; // Assuming you have your custom styles in Login.css
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:8000/api/auth';
      const { data: res } = await axios.post(url, data);
      localStorage.setItem('token', res.data);
      window.location = '/';
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
  const handleBook=()=>{
    try {
         axios.post('http://localhost:8000/api/auth/booksAdding')
        
    } catch (error) {
        
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col lg:flex-row w-full lg:w-9/12 lg:max-w-screen-xl bg-white rounded-lg shadow-md overflow-hidden">
        <div className="lg:w-2/3 flex items-center justify-center bg-white p-8 lg:p-12">
          <form
            className="w-full max-w-md"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-extrabold mb-6">Login to your account</h1>
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
              Sign In
            </button>
            <Link to="/forgotpassword" className="text-blue-500">
                Forgot Password?
              </Link>
          </form>
        </div>
        <div className="lg:w-1/3 flex items-center justify-center bg-cyan-500 text-black p-8 lg:p-12">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold mb-4">New Here?</h1>
            <Link to="/signup">
              <button type="button" className="white_btn text-black">
                Sign Up
              </button>
            </Link>
            <button onClick={handleBook}>Click to add book

            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
