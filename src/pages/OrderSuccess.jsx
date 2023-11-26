import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';


const OrderSuccess = () => {

  return (
    <div>
      <Nav  />
      <div className="container mx-auto my-8 text-center" style={{ minHeight: '350px' }}>
  <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
  <p>Your order has been placed successfully.</p>
  <Link to="/" className="text-blue-500 mt-4 block">
    Back to Shopping
  </Link>
</div>

      <Footer />
    </div>
  );
};

export default OrderSuccess;
