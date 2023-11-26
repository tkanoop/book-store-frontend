import React, { useContext, useEffect } from 'react';
import Nav from '../components/Nav/Nav';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import BooksContext from '../context/books';

import * as api from "../components/API/API"
import useAuth from '../hooks/useAuth';


function Home() {
  const { setBooks,books } = useContext(BooksContext);
  const {auth,setAuth}=useAuth()

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

  
  const renderedBooks = books?.map((book) => {
    return <Card key={book._id} book={book} />;
  });

  return (
    <>
      <Nav loggedIn={auth} />
      <div className='book flex flex-wrap'>{renderedBooks}</div>
      <Footer />
    </>
  );
}

export default Home;
