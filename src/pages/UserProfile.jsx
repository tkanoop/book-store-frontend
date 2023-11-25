import React from 'react';
import { FaUser } from 'react-icons/fa';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import useAuth from '../hooks/useAuth';

const UserProfile = () => {
  const {auth,setAuth}=useAuth()
 
  // Dummy data for the user and purchased books
  const user = {
    username: 'JohnDoe',
    email: 'john.doe@example.com',
  };

  const purchasedBooks = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
  ];


  return (
    <>
    <Nav loggedIn={auth}/> 
     <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-md " style={{minHeight:'350px'}}>
      <div className="flex items-center mb-8">
        <FaUser className="w-12 h-12 mr-4" />
        <div>
          <h2 className="text-2xl font-bold">{user.username}</h2>
          <p>{user.email}</p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Purchased Books</h2>
        <ul>
          {purchasedBooks.map((book) => (
            <li key={book.id} className="mb-2">
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default UserProfile;
