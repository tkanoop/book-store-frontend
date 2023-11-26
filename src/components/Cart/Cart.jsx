import React, { useEffect, useState } from 'react';
import useBookContext from '../../hooks/use-books-context';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import * as api from "../API/API"
import { useNavigate } from 'react-router-dom'



const Cart = () => {
  const { cart, setCart } = useBookContext()
  const navigate = useNavigate()
  const { setAuth } = useAuth()

  let total = 0

  const fetchCart = async () => {
    try {
      const response = await api.fetchCart()
      console.log(response);
      setAuth({ id: response.data.id })
      if (response) {
        setCart(response.data.cart)
      } else {
        setCart(null)
      }
    } catch (err) {
      if (err.response.status == 404)
        navigate('/login')
      console.log('cannot load cart now');
    }
  }

  useEffect(() => {



    fetchCart()

  }, [])
  if (cart.length > 0) {
    total = cart.reduce((total, item) => total + item?.Quantity * item?.Price, 0)
  }


  const changeQty = async (qty, productId) => {
    const body = {
      qty, productId
    };

    const token = localStorage.getItem('token')
    await axios.patch('https://book-store-backend-production-8e74.up.railway.app/api/auth/change-qty', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    fetchCart()

  }

  const handleOrder = async () => {
    try {
      api.checkout()
      setCart([])
      alert('checkout completed')
      navigate('/success')
    } catch (err) {

    }
  }



  return (
    <div className="container mx-auto my-8 " style={{ minHeight: '350px' }}>
      <h1 className="text-3xl font-bold mb-4 text-center">Shopping Cart</h1>
      <ul className="divide-y divide-gray-200">
        {cart && cart.length > 0 ? (
          cart.map((item) => (
            <li className="flex justify-center items-center py-2 ml-6">
              <div className="flex items-center space-x-4">
                <img
                  src={item?.Image}
                  alt="book title"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                  <span className="font-bold">{item?.bookname}</span>
                  <span className="text-gray-600 ml-5 pl-6">Price : Rs {item?.Price} </span>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-2 md:mt-0 pl-6 ">
                <button onClick={() => changeQty(1, item?.productId)}
                  className="text-sm bg-blue-500 text-white px-2 py-1  rounded"

                >
                  +
                </button>
                <span>{item?.Quantity}</span>
                <button
                  onClick={() => changeQty(-1, item?.productId)}
                  className="text-sm bg-red-500 text-white px-2 py-1 rounded"
                  disabled={item?.Quantity === 1}
                >
                  -
                </button>

                <button
                  className="text-sm text-red-500"

                >
                  Remove
                </button>
              </div>
            </li>
          ))
        ) : (
          // Handle case when cart is empty or undefined
          <p>Your cart is empty.</p>
        )}
      </ul>
      <div className="mt-8 flex flex-col items-center">
        <h3 className="text-xl font-bold">Total: Rs {total}</h3>
        <button className="bg-green-500 text-white px-4 py-2 rounded mt-8 " onClick={handleOrder}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;




