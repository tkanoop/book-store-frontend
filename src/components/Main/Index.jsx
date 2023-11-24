import './Index.css'; // Assuming you have your custom styles in Index.css
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div className="main_container">
      <nav className="navbar">
        <div className="flex items-center">
         
          <h1 className="text-white text-2xl ml-4">BOOK STORE</h1>
        </div>
        <div className="flex items-center">
		<Link to="/user-profile">
            <FaUser className="w-8 h-8 text-white cursor-pointer mr-2" />
          </Link>
          <button
            className="white_btn bg-white text-green-500 font-bold px-6 py-3 rounded-full cursor-pointer mr-4"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>
      </nav>
    </div>
  );
};

export default Main;
