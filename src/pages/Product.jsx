import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import { BiCheck } from 'react-icons/bi';

function Product({ products }) {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || {}
    console.log(cart, "cart")
    if(cart.products){
      const show = cart?.products.some(item => item.id === id)
      console.log(show, "show")
      setShowCart(show)

    }

    const pro = products.find(item => item._id === id)
    console.log(pro, "product")
    setProduct(pro)
  }, [id, products])


  const handlecart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || {
      products: [],
      total: 0
    }
    cart.products.push({ 'id': product._id, 'name': product.name, 'image': product.image, 'price': product.price, 'qty': 1 })
    cart.total += parseInt(product.price.slice(1))
    localStorage.setItem('cart', JSON.stringify(cart))
    setShowCart(true)
  }

  return (
    <div>
      <Header />

      {product ?
        (<div className='mt-15 flex flex-col md:flex-row md:gap-3 justify-center items-center '>
          <img src={product.image} alt="" className='w-120' />
          <div className='flex flex-col gap-3 max-w-120 m-3' >
            <p className='text-2xl text-gray-700/70 md:text-3xl font-bold'>{product.name}</p>
            <p className='w-full md:w-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident delectus neque dolorum aspernatur odio quis accusantium repellat, ex suscipit debitis non obcaecati quaerat excepturi in expedita, eaque numquam distinctio perspiciatis.</p>
            <p className='text-2xl text-gray-500/70 font-semibold'>{product.price}</p>
            {showCart ? <a href="/cart">
              <button className='rounded py-2.5 px-6 w-45 cursor-pointer flex items-center justify-center bg-[#10B981] '> <BiCheck color='white' size={30} />
              </button>
            </a> :

              <button className='bg-gray-500 rounded py-2.5 px-6 w-45 cursor-pointer hover:bg-gray-500/80 font-semibold  text-white' onClick={handlecart}>Add To Cart</button>
            }
          </div>
        </div>) : (
        <p>Product Not Found</p>

        )}
    </div>
  )
}

export default Product