import React, { useContext, useEffect } from 'react';
import Nav from '../components/Nav/Nav';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import BooksContext from '../context/books';
import axios from 'axios';

function Home() {
  const { setBooks,books } = useContext(BooksContext);
  console.log("books",books);
  useEffect(() => {
    const fetchBooks = async () =>{
      const response =await axios.get('http://localhost:8000/api/auth/books')
      setBooks(response.data.book)
      console.log(response.data.book);
      
  }
  fetchBooks ()
  
  }, [])
  
 
  

  const renderedBooks = books.map((book) => {
    return <Card key={book._id} book={book} />;
  });

  return (
    <>
      <Nav />
      <div className='book flex flex-wrap'>{renderedBooks}</div>
      <Footer />
    </>
  );
}

export default Home;
