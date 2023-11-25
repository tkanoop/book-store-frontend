import React, { useContext, useEffect } from 'react';
import Nav from '../components/Nav/Nav';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import BooksContext from '../context/books';
import axios from 'axios';
import { useState } from 'react';
import * as api from "../components/API/API"
import useAuth from '../hooks/useAuth';
import useBookContext from '../hooks/use-books-context';

function Home() {
  const { setBooks,books } = useContext(BooksContext);
  const {auth,setAuth}=useAuth()
  const {cart} =useBookContext()
  useEffect(() => {
    const fetchBooks = async () =>{
      try{
        const response =await api.fetchBooks()
        setBooks(response.data.book)
        console.log(response);
        const auth=await api.authenticate()
        setAuth({id:auth.data.id})
      }
      catch(err){
        setAuth(false)
        console.log('unauthorized');
      }
  }
  fetchBooks ()
  
  }, [])

  
  const renderedBooks = books.map((book) => {
    return <Card key={book._id} book={book} />;
  });

  return (
    <>
      <Nav loggedIn={auth} cart={cart}/>
      <div className='book flex flex-wrap'>{renderedBooks}</div>
      <Footer />
    </>
  );
}

export default Home;
