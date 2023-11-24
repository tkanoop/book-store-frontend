
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [data, setData] = useState({
    email: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a request to your backend for password reset
      const url = 'http://localhost:8000/api/reset-password';
      const { data: res } = await axios.post(url, data);
      console.log(res.message);
      // Redirect or show a success message based on your needs
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col lg:flex-row w-full lg:w-9/12 lg:max-w-screen-xl bg-white rounded-lg shadow-md overflow-hidden">
        <div className="lg:w-2/3 flex items-center justify-center bg-white p-8 lg:p-12">
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-extrabold mb-6">Reset Your Password</h1>
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
              placeholder="New Password"
              name="newPassword"
              onChange={handleChange}
              value={data.newPassword}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleChange}
              value={data.confirmPassword}
              required
              className="input"
            />
            {error && <div className="error_msg">{error}</div>}
            <button type="submit" className="green_btn">
              Reset Password
            </button>
          </form>
        </div>
        <div className="lg:w-1/3 flex items-center justify-center bg-cyan-500 text-black p-8 lg:p-12">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold mb-4">Remember your password?</h1>
            <Link to="/login">
              <button type="button" className="white_btn text-black">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
