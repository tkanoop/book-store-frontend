import React from 'react';
import { Link } from 'react-router-dom';
import axios from'axios'

const Card = ({ book }) => {

const token=localStorage.getItem('token')
const bookId=book._id



    const handleClick=async()=>{
        const postData={
            token:token,
            bookId:bookId
        }
        const response =await axios.post("http://localhost:8000/api/auth/cart",postData,{
            headers:{
                Authorization: `Bearer ${token}`,
            },

        })


    }
  return (
    <div className="w-1/4 p-4">
      <div className="max-w-xs rounded overflow-hidden shadow-lg hover:shadow-xl">
      <Link to={`/product/${book._id}`}>
      
       
        <img
          className="w-full h-48 object-cover transform scale-100 transition-transform duration-300 hover:scale-110"
          src={book.Image}
          alt={book.bookName}
        />
         </Link>
        <div className="px-6 py-4">
          <div className="text-gray-700 font-bold text-xl mb-2">{book.Author}</div>
          <p className="text-gray-700 text-base">{book.Price}</p>
          <p className="text-gray-700 text-base">{book.Category}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {book.Quantity}
          </span>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full" onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
