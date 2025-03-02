import React, { useEffect, useState } from 'react'
import { RiDeleteBin7Line } from "react-icons/ri";
import {decrement} from '../counterSlice'
import {useDispatch, useSelector} from 'react-redux';


function CartItem({ item, cart, setCart}) {
  const cartCount = useSelector((state) =>  state.counter.value)
  const dispatch = useDispatch()
  let [count, setCount] = useState(1)




  useEffect(() =>{
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    const updateCount = () => {
      setCount(item.qty)
    }
    updateCount()
  }, [item])


  const handleDel = (id, price) => {
    setCart(prevCart => {
    const updatedProducts = prevCart.products.filter((item) => item.id !== id);
    const totalPrice = prevCart.total - price;
    const updatedCartProducts = {
      ...prevCart,
      products : updatedProducts,
      total : totalPrice

   }
   localStorage.setItem('cart', JSON.stringify(updatedCartProducts))

   return updatedCartProducts
  }
  )
    dispatch(decrement());

  }

  const handleInc = (id, price) => {
    cart.products.map(item => {
      if (id == item.id) {
        item.qty += 1
        setCount(item.qty)
        setCart(prev => ({
          ...prev,
          total : prev.total + price
        }))
      }
    })

    console.log(cart, "cartItems.... after inc")
  }
  
  const handleDec = (id, price) => {
    cart.products.filter(item => {
      if (id == item.id) {
        item.qty -= 1
        setCount(item.qty)
        setCart(prev => ({
          ...prev,
          total : prev.total - price
        }))
      }
    })
  }
  const price = parseInt(item.price.slice(1))

  return (
      <div className='flex flex-col md:flex-row gap-x-3 border-b-1 text-lg border-gray-500/30 last:border-0 p-2 items-center '>
        <img src={item.image} alt="" className='w-50' />
        <div className='flex flex-col flex-grow-1'>
          <span className='font-semibold'>{item.name}</span>
          <div className='flex items-center flex-row justify-between'>
            <div className='flex flex-col '>
              <span>Price:  {item.price} </span>
              <span className='flex items-center'>Color: <p className='w-4 h-4 ml-2 rounded-full bg-violet-400/30'></p> </span>
              <span>Size: M </span>
            </div>
            <div className='flex flex-col  items-center gap-y-3'>
              <p className='text-2xl text-gray-500'>
                {count && (price * count)}
              </p>
              <div className='border-1 border-gray-400/20 rounded  flex flex-row items-center'>
                {count == 1 ?
                  <RiDeleteBin7Line size={30} className='border-r-1 w-8 border-gray-400/20 m-2 pr-3' onClick={() => handleDel(item.id, price)} />

                  :
                  <button className='border-r-1 w-8 border-gray-400/20 m-3 pr-3' onClick={() => handleInc(item.id, price)}>+</button>
                }
                <span className='w-4' >{count}</span>
                {count == 1 ?
                  <button className='border-l-1  w-8 border-gray-400/20 m-3 pl-3' onClick={() => handleInc(item.id, price)}>+</button>
                  :
                  <button className='border-l-1  w-8 border-gray-400/20 m-3 pl-3' onClick={() => handleDec(item.id, price)}>-</button>
                }
              </div>

            </div>
          </div>
        </div>
      </div>
    

  )
}

export default CartItem