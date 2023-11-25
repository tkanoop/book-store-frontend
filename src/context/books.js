  // PLace it in Context  Folder

//Import all api`s as the api
import * as api from "../components/API/API";

import { createContext, useState } from "react";

const BooksContext = createContext();
function Provider({ children }) {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([null]);

  const fetchCart = async () => {
    try {
      const response = await api.fetchCart();
      setCart(response.data.cart);
      console.log(response.data.cart);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBooks = async () => {
    try {
      const response = await api.fetchBooks();
      setBooks(response.data.book);
      console.log(response.data.book);
    } catch (error) {
      console.log(error);
    }
  };

  const valueToShare = {
    books: books,
    fetchBooks: fetchBooks,
    fetchCart: fetchCart,
    cart: cart,
    setBooks,
    setCart,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
