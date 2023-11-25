import { createContext,useState } from "react";
import axios from 'axios'


const BooksContext=createContext()
function Provider({ children}){
    const [books,setBooks]=useState([])
    const [cart,setCart]=useState([null])

    const fetchCart=async()=>{
        const token=localStorage.getItem('token')
        const response=await axios.get('http://localhost:8000/api/auth/cartView',{
            headers:{
                Authorization: `Bearer ${token}`,
            },
        })
        setCart(response.data.cart)
        console.log(response.data.cart);

    }


    const fetchBooks = async () =>{
        const response =await axios.get('http://localhost:8000/api/auth/books')
        setBooks(response.data.book)
        console.log(response.data.book);
        
    }

     const valueToShare={
        books:books,
        fetchBooks:fetchBooks,
        fetchCart:fetchCart,
        cart:cart,setBooks,setCart

       
     }
   
    return <BooksContext.Provider value={valueToShare} >
        {children}

    </BooksContext.Provider>
}
export {Provider}
export default BooksContext;