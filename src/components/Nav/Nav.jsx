import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';


const Nav = ({ loggedIn,cart }) => {
  const navigate = useNavigate()
  console.log(cart)



  useEffect(() => { })

  const handleClick = () => {

  }



  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login")
  }

  return (
    <div className="bg-gradient-to-r from-teal-800 via-teal-500 to-cyan-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-white text-3xl font-bold">BOOK STORE</h1>
        </Link>

        <div className="flex items-center space-x-4">
          {/* Add cart icon */}
      
            <Link to="/cart" className="text-white">
            <FaShoppingCart className="w-8 h-8 cursor-pointer" onClick={handleClick} />
          </Link>

          

          {/* User icon */}
          <Link to="/user-profile" className="text-white">
            <FaUser className="w-8 h-8 cursor-pointer" />
          </Link>

          {/* Logout button */}
          {
            loggedIn ? (<button
              className="bg-white text-teal-500 font-bold px-4 py-2 rounded-full"
              onClick={handleLogout}
            >
              Logout
            </button>) : (<button
              className="bg-white text-teal-500 font-bold px-4 py-2 rounded-full"
              onClick={()=>navigate('/login')}
            >
              LogIn
            </button>)
          }
        </div>
      </div>
    </div>
  );
};

export default Nav;
