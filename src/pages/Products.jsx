import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import { useLocation } from 'react-router-dom'
function Products({products}) {
const search = useLocation().search;
const category = new URLSearchParams(search).get("category")
console.log(products.length, "pro len")
console.log(category, "cat");
  return (
    <div>
        <Header />
        {category ? 
      <p className='my-5 text-center p-5  border-b-1  w-fit m-auto  border-b-gray-500/30 font-light text-3xl md:text-4xl md:w-2xl'>Products : {category} </p>
      : 
      <p className='my-5 text-center p-5  border-b-1  w-fit m-auto  border-b-gray-500/30 font-light text-3xl md:text-4xl md:w-2xl'>Products</p>
        }
      <div className="flex flex-wrap gap-2 justify-center mt-4 md:w-250 m-auto w-full p-3">
        { category ? 
        
        products.filter((product) => product.category.toLowerCase()===category).map((product) =>  (
          <Card key={product._id} product={product}/>
        ))
        
        : products.map((product) => (
          <Card key={product._id} product={product}/>
        ))
          
        }
      </div>
    </div>
  )
}

export default Products