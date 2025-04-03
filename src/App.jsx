import { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import Products from './pages/Products'
import Account from './pages/Account'

import axios from 'axios'

function App() {
 const [products, setProducts] = useState([]);
 useEffect( () => {
  const fetch  = async () => {
    // await axios.get("https://fashion-ecommerce-backend-em5o.onrender.com/products").then(res => {
    await axios.get(import.meta.env.VITE_URL+"products").then(res => {
      setProducts(res.data.products)
    }).catch(err => {
      console.log("error to get products from backend", err)
    })
  }
  fetch()
 },[])

 console.log(products, "products")
  return (
    <>

     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home products={products} />}></Route>
        <Route path='/product/:id' element={<Product products={products} />}></Route>
        <Route path='/products/' element={<Products products={products} />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/account' element={<Account />}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
