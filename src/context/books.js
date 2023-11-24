import { createContext,useState } from "react";
import axios from 'axios'


const BooksContext=createContext()
function Provider({ children}){
    const [books,setBooks]=useState([])


    const fetchBooks = async () =>{
        const response =await axios.get('http://localhost:8000/api/auth/books')
        setBooks(response.data.book)
        console.log(response.data.book);
        
    }

     const valueToShare={
        books:books,
        fetchBooks:fetchBooks
       
     }
   
    return <BooksContext.Provider value={valueToShare} >
        {children}

    </BooksContext.Provider>
}
export {Provider}
export default BooksContext;