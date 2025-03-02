import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Card from "../components/Card"
function Home( {products} ) {
  console.log("products home", products.length)
  return (
    <>
      <Header />
      <Carousel />
      <p className='my-5 text-center p-5  border-b-1  w-fit m-auto  border-b-gray-500/30 font-light text-3xl md:text-4xl md:w-2xl'>Popular Categories</p>
      <div className='flex flex-wrap justify-center'>
        <div className='h-85 w-50 overflow-hidden relative'>
          <img src="https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className='h-full w-full object-cover transition duration-500 ease-out transform hover:scale-110' />
          <p className='absolute inset-0 bg-black/50 p-2 h-fit text-white font-bold w-fit text-2xl grid place-items-center  m-auto tracking-widest'>SHIRT STYLE!</p>
        </div>
        <div className='h-85 w-50 overflow-hidden relative'>
          <img src="https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className='h-full w-full object-cover transition duration-500 ease-out transform hover:scale-110' />
          <p className='absolute inset-0  bg-black/50 p-2 h-fit text-white font-bold w-fit text-2xl grid place-items-center  m-auto tracking-widest'>DENIMS</p>
        </div>
        <div className='h-85 w-50 overflow-hidden relative'>
          <img src="https://images.pexels.com/photos/449977/pexels-photo-449977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='h-full w-full object-cover transition duration-500 ease-out transform hover:scale-110' />
          <p className='absolute inset-0  bg-black/50 p-2 h-fit text-white font-bold w-fit text-2xl grid place-items-center  m-auto tracking-widest text-center'>LEATHER JACKETS</p>
        </div>
        <div className='h-85 w-50 overflow-hidden relative'>
          <img src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='h-full w-full object-cover   transition duration-500 ease-out transform hover:scale-110' />
          <p className='absolute inset-0 bg-black/50 p-2 h-fit text-white font-bold w-fit text-2xl grid place-items-center  m-auto tracking-widest'>HOODIES</p>
        </div>
      </div>
      <p className='my-5 text-center p-5  border-b-1  w-fit m-auto  border-b-gray-500/30 font-light text-3xl md:text-4xl md:w-2xl'>Latest Arrivals</p>
      <div className="flex flex-wrap gap-2 justify-center mt-4">
      { products.length > 0 &&  products.slice(0,3).map((product) => {
        return (
          <Card key={product._id} product={product}/>
        )
      })}
      </div>
    </>

  )
}

export default Home