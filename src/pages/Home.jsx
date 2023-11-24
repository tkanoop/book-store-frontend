import React, { useContext } from 'react';
import Nav from '../components/Nav/Nav';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import BooksContext from '../context/books';

function Home() {
  const { books } = useContext(BooksContext);
  console.log(books);

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
