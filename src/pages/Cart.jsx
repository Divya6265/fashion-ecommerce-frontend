import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import CartItem from '../components/CartItem'
import { LuShoppingBag } from "react-icons/lu";
import { useSelector } from 'react-redux';
function Cart() {
  var [cart, setCart] = useState({
        products : [],
        total : 0
    })
    const count = useSelector((state) => state.counter.value)
    useEffect(() => {

      const storecart = JSON.parse(localStorage.getItem('cart'));
      if(storecart){
        setCart(storecart)
      }
    },[])

  
  return (
    <div>
      <Header />
      {console.log(count, "count")}
    {count ? 
    <>
    <h1 className='font-light text-3xl md:text-4xl text-center mt-6 '>Your Shopping Cart</h1>
    <div className='flex flex-col md:flex-row mt-6 md:p-5 '>
      <div className='border-2 border-gray-500/30  md:m-auto rounded p-2 md:w-200 w-auto'>
        {
          cart.products.map((item, index) => {

            return (
              <CartItem key={item.id} item={item} cart={cart} setCart={setCart} />
            )
          })
        }
      </div>
      <div className='sticky p-5 border-2 self-start w-fit  m-auto md:m-0 border-gray-500/30 rounded'>
        <p className='text-3xl uppercase border-b-2 border-gray-400/30 py-3'>Cart Summary</p>
        <div className='grid grid-cols-2 mt-3 gap-x-30 gap-y-4 text-xl '>
          <span>Subtotal</span>
          <span className='text-end'>{cart.total}</span>
          <span>Shipping Charges</span>
          <span className='text-end'>$9</span>
          <span>Shipping Discount</span>
          <span className='text-end'>-$9</span>
          <span className='text-xl  font-bold'>Total</span>
          <span className='text-xl  font-bold text-end'>${cart.total}</span>
        </div>
      </div>
    </div>
    </> : 
   <div className='text-center '> <h1 className='font-light text-3xl md:text-4xl text-center mt-6'>Your Shopping Cart is Empty</h1>
     <a href="/products" className='text-md flex items-center justify-center mt-6 text-blue-600 '><LuShoppingBag size={30} className='mx-3 ' /> Continue Shopping</a></div>
    }
    </div>
  )
}

export default Cart