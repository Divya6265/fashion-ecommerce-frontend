import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";
import { useSelector } from 'react-redux';


function Header() {
  const [user, setUser] = useState({})

  const count = useSelector((state) => state.counter.value)
  useEffect(() => {

    axios.get("http://127.0.0.1:8000/user/profile", {
      headers: {
        Authorization: localStorage.getItem('token') || null
      }
    }).then(res => {
      if (res.data.success) {
        setUser(res.data.user)
      }
    })

  }, [])


  const navigate = useNavigate()
  const [showNav, setShowNav] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const handleShow = () => {
    setShowProfile(false)
    setShowNav(!showNav)
  }
  const handleProfile = () => {
    setShowProfile(!showProfile)
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.reload()
    navigate("/")

  }
  return (
    <>
      <div className="sticky top-0 z-50 shadow-sm">
        <div className='flex px-10 py-3  flex-wrap items-center justify-between bg-gray-200 text-gray-900'>
          <p className='text-2xl'><a href="/">MERN</a></p>

          <nav className={`  md:mr-10 flex-col order-1 mt-5 gap-x-10 md:flex-grow md:justify-end gap-y-4 w-full  items-center md:mt-0 md:w-fit md:flex-row md:gap-y-0 ${showNav ? 'flex' : 'md:flex hidden'} `}>
            <Link to={'/products/?category=men'}>MEN</Link>
            <Link to={'/products/?category=women'}>WOMEN</Link>
            <Link to={'/products'}>ALL PRODUCTS</Link>
            <form action="" className='-order-1 flex items-center w-full md:w-fit md:order-0 '>
              <IoSearchOutline className='-mr-6 text-gray-800 z-10' />
              <input type="text" name="search" className='border-2 border-gray-500 bg-gray-100 rounded-md pl-7 p-1 focus:outline-1 outline-gray-500 w-full' autoComplete='off' id="search" placeholder='Search..' />
            </form>
            <div className=' gap-x-10 items-center flex flex-col md:flex-row '>
              <Link to='/signin' className={`mt-6 py-1.5 flex  justify-center items-center md:mt-0  ${user?.name ? 'pointer-events-none' : ''} `}><LuLogIn className='mr-2' />Login</Link>
              <Link to='/signup' className={`my-2 bg-gray-600 rounded py-1.5 w-full lg:w-fit p-3  text-white font-bold flex  justify-center items-center ${user?.name ? 'pointer-events-none' : ''} `}> <IoPerson className='mr-2' />Register</Link>
            </div>
          </nav>
          <div className='flex items-center gap-2 md:order-1 ' >
            <Link to="/cart" className='relative'>

              <FiShoppingCart size={29} className='text-gray-600' />
              <span className='absolute top-0 -right-3 text-white 
            bg-[#10B981] text-sm rounded-full w-5 h-5 flex items-center justify-center'>{count}</span>
            </Link>
            {user?.name &&
              <div className='w-9 h-9 rounded-full ml-4 bg-gray-500/20 overflow-hidden grid place-items-center'>
                <IoPerson className="cursor-pointer " color='gray' size={25} onClick={handleProfile} />
              </div>
            }

            {user?.name && showProfile && <div className='flex flex-col absolute z-60 top-16 bg-white w-max px-2 rounded right-0 shadow '>
              <span className='flex flex-col border-b-1 p-2 border-gray-500/20 pb-2'>
                <span>{user?.name}</span>
                <span>{user?.email}</span>
              </span>
              <ul className='flex flex-col gap-y-2 w-full '>
                <Link to={'/cart'} className='hover:bg-gray-500/20 px-2 py-1' >Cart</Link>
                <Link to={'/account'} className='hover:bg-gray-500/20 px-2 py-1'>Account</Link>
                <Link className='flex items-center hover:bg-gray-500/20 mb-2 px-2 py-1' onClick={handleLogout}><LuLogIn className='mr-2' /> Logout</Link>
              </ul>
            </div>}
            <div className="md:hidden block  "> {showNav ? (<IoMdClose size={30} onClick={handleShow} />) : (<FaBars size={30} onClick={handleShow} />)}   </div>

          </div>
        </div>
      </div>
    </>

  )
}

export default Header;