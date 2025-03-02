import React,{useState, useEffect } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { BiCheck } from "react-icons/bi";
import {increment} from '../counterSlice'
import { useDispatch } from 'react-redux';
function Card({ product }) {
    const dispatch = useDispatch()
    console.log(product, "card product")
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || {}
        console.log(cart, "cart from local")
        if(cart.products){
        const productInCart = cart.products.some((item) => item.id == product._id)
        setShowCart(productInCart)}
    }, [product._id])

   
    var [cart, setCart] = useState({
        products : [],
        total : 0
    })
    const handleCart = () => {
        if(JSON.parse(localStorage.getItem("cart"))){
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        
        cart.total += parseFloat(product.price.slice(1))
        setCart(prev => ({
            products: cart.products.push({ 'id': product._id, 'name': product.name, 'image': product.image, 'price': product.price, 'qty': 1 }),
            total : cart.total
        }));
        setShowCart(true);
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log("cart using state", cart);
        dispatch(increment())
    }

    return (
        <div className='w-70 flex flex-col  relative justify-between shadow-md rounded-2xl overflow-hidden hover:shadow-lg p-2'>
            <img src={product.image} alt="" className='object-cover transition duration-500 transform hover:scale-110' />
            <p className=' ml-auto rounded-full p-1  text-white z-10 bg-black/60  w-fit'>{product.price}</p>
            <div className='absolute inset-0 top-0 left-0 z-10 opacity-0 transition duration-500 transform hover:opacity-100 bg-gray-500/20 flex flex-col items-center justify-center gap-y-5'>

                <div className=''>
                    {showCart ? <a href="/cart">
                        <button className='rounded-full  p-3  flex items-center justify-center hover:px-10 bg-[#10B981] '> <BiCheck color='white' size={30} />
                        </button>
                    </a> :

                        <button className='rounded-full p-3  z-10 bg-white flex items-center transition duration-500 transform  justify-center hover:px-10 ' onClick={handleCart}> <FiShoppingCart size={30} /> </button>}
                </div>
                <a href={`/product/${product._id}`}>
                <button className='rounded-full p-3  bg-white h-fit flex items-center transition duration-500 transform  justify-center hover:px-10 '> <IoSearchOutline size={30} /> </button>

</a>
            </div>
        </div>
    )
}

export default Card