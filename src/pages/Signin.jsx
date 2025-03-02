import React, { useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { GoLock } from "react-icons/go";
import { MdOutlineMailOutline } from "react-icons/md";


function Signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
    const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/user/signin", {email, password} ).then(res => {
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("user", JSON.stringify({name : res.data.user.name, email: res.data.user.email}) )
      // localStorage.setItem("email", res.data.user.email)
      navigate("/")
    }).catch(err => {
      console.log(err);
    })

  }
  return (
    <div> <Header/>
    <div className='mt-[5%]'>
      
    <div className="w-fit md:w-100 p-10 m-auto rounded-lg">
      <h1 className=' text-3xl text-center font-bold text-gray-700 my-7'>Login to your account</h1>
      <form action="" method="post" className='flex items-center justify-center w-full gap-2 flex-col '>
      <span className='flex items-center w-full '>
      <MdOutlineMailOutline size={25} className='-mr-8 z-10' />
      <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' className='pl-10 p-3  bg-gray-100/60 rounded border w-full outline-0'/>
      </span>
      
      <span className='flex items-center mt-3 w-full '>
      <GoLock size={25} className='-mr-8 z-10'/>
      <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' className='pl-10 p-3 bg-gray-100/60 rounded w-full border outline-0'/>
      </span>

      <button className='bg-black text-white hover:bg-black/80 -ml-3 font-bold rounded-full mt-5 p-3 w-full 'onClick={(e) => handleSubmit(e)} >Sign In</button>
      <a href="/signup" className='text-center text-lg mt-5 text-blue-600 font-bold'>Create an account</a>
      </form>
    </div>
    </div>
   
</div>
  )
}

export default Signin