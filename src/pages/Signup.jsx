import React, { useState } from 'react'
import Header from '../components/Header'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { GoLock } from "react-icons/go";
import { MdOutlineMailOutline } from "react-icons/md";

function Signup() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/user/signup", {name, email, password,confirmPassword} ).then(res => {
      console.log(res)
      navigate("/signin")
    }).catch(err => {
      console.log(err);
    })
  }
  return (
    <div> <Header/>
    <div className='mt-[5%]'>
      
    <div className="w-fit md:w-100 p-10 m-auto rounded-lg">
      <h1 className=' text-3xl text-center font-bold text-gray-700 my-7'>Create a new account</h1>
      <form action="" method="post" className='flex items-center justify-center w-full gap-2 flex-col '>
      <span className='flex items-center w-full  mt-3 '>
      <MdOutlineMailOutline size={25} className='-mr-8 z-10' />
      <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} placeholder='Name' className='pl-10 p-3  bg-gray-100/60 rounded border w-full outline-0'/>
      </span>
      <span className='flex items-center w-full  mt-3 '>
      <MdOutlineMailOutline size={25} className='-mr-8 z-10' />
      <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='pl-10 p-3  bg-gray-100/60 rounded border w-full outline-0'/>
      </span>
      
      <span className='flex items-center mt-3 w-full '>
      <GoLock size={25} className='-mr-8 z-10'/>
      <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='pl-10 p-3 bg-gray-100/60 rounded w-full border outline-0'/>
      </span>
      <span className='flex items-center mt-3 w-full '>
      <GoLock size={25} className='-mr-8 z-10'/>
      <input type="password" name="confirmPassword" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' className='pl-10 p-3 bg-gray-100/60 rounded w-full border outline-0'/>
      </span>

      <button className='bg-black text-white hover:bg-black/80 -ml-3 font-bold rounded-full mt-5 p-3 w-full 'onClick={(e) => handleSubmit(e)} >Register</button>
      <a href="/signup" className='text-center text-lg mt-5 text-blue-600 font-bold'>Already have an account</a>
      </form>
    </div>
    </div>
   
</div>
  )
}


export default Signup