import React from 'react';

const Cart = () => {
  const cart = [
    {
      productId: 1,
      name: 'Product 1',
      image: 'https://example.com/product1.jpg',
      quantity: 2,
      price: 20.99,
    },
    {
      productId: 2,
      name: 'Product 2',
      image: 'https://example.com/product2.jpg',
      quantity: 1,
      price: 15.49,
    },
    {
      productId: 3,
      name: 'Product 3',
      image: 'https://example.com/product3.jpg',
      quantity: 3,
      price: 10.99,
    },
  ];

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const handleRemoveFromCart = (productId) => {
    // Handle removing from cart
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.productId} className="flex items-center border-b border-gray-300 py-4">
              <div className="flex-none w-24 h-24 mr-4">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <p className="text-lg font-bold mb-2">{item.name}</p>
                <div className="flex mb-2">
                  <p className="text-gray-600 mr-4">Price: ${item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.productId)}
                  className="text-red-500 font-bold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-8">
            <p className="text-xl font-bold">Total Price: ${calculateTotalPrice()}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4">
              Cash on Delivery
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
