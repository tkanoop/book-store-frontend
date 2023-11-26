import React, { useContext } from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import BooksContext from '../context/books';


const SingleProduct = () => {
  const { books } = useContext(BooksContext);
  const { _id } = useParams();


  const filteredData = books.filter((product) => product._id === _id);
  const product = filteredData[0];

  return (
    <>
      <Nav/>
      <div className="max-w-md mx-auto p-4 mt-8">
        {product ? (
          <>
            <img
              className="w-full h-64 object-cover mb-4"
              src={product.Image}
              alt={product.bookName}
            />
            <div>
              <div className="text-gray-700 font-bold text-xl mb-2">{product.Author}</div>
              <p className="text-gray-700 text-base">{product.Price}</p>
              <p className="text-gray-700 text-base">{product.Category}</p>
            </div>
            <div className="mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
                Add to Cart
              </button>
            </div>
          </>
        ) : (
          <p>Product not found</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
