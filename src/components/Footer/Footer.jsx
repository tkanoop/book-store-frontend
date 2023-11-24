import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 pl-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6">
          <h3 className="text-2xl font-bold mb-4">Categories</h3>
          <ul>
            <li>Science Fiction</li>
            <li>Fantasy</li>
            <li>Mystery</li>
            <li>Romance</li>
            <li>Thriller</li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6">
          <h3 className="text-2xl font-bold mb-4">Best Sellers</h3>
          <ul>
            <li>The Great Gatsby</li>
            <li>To Kill a Mockingbird</li>
            <li>1984</li>
            <li>Harry Potter Series</li>
            <li>The Lord of the Rings</li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p>Email: info@bookstore.com</p>
          <p>Phone: +1 234 567 8901</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6">
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-500">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-500">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-500">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
