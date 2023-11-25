import React, { useEffect } from 'react'
import Nav from '../components/Nav/Nav'
import Cart from '../components/Cart/Cart'
import Footer from '../components/Footer/Footer'
import useBookContext from '../hooks/use-books-context'

function CartPage() {
  

  return (
    <div>
    <Nav/>
    <Cart/>
    <Footer/>
    </div>
  )
}

export default CartPage