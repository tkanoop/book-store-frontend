import React, { useEffect } from 'react'
import Nav from '../components/Nav/Nav'
import Cart from '../components/Cart/Cart'
import Footer from '../components/Footer/Footer'
import useAuth from '../hooks/useAuth'

function CartPage() {
  const {auth,setAuth}=useAuth()

  
  

  return (
    <div>
    <Nav loggedIn={auth}/>
    <Cart/>
    <Footer/>
    </div>
  )
}

export default CartPage