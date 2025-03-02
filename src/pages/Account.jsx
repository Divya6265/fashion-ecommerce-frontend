import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import axios from 'axios'

function Account() {
    const [user, setUser] = useState({})
    const [img, setImg] = useState({})
    const navigate = useNavigate()
    useEffect(() => {

        axios.get("http://127.0.0.1:8000/user/profile",{
            headers : {
                Authorization : localStorage.getItem('token') || null 
            }
        }).then(res => {
            if(res.data.success){
                setUser(res.data.user)
            }
        }).catch(err => {
            console.error("error to identifdy user", err)
            navigate("/")
        })
      
    },[])
  return (
    <div>
        
        <Header/>
        {user && 
        <div className='flex flex-col justify-items-start items-center mt-5 w-full h-dvh '>
        <img src={`https://avatar.iran.liara.run/username?username=${user.name}`} className='w-50 h-50'/>

            <p className='text-3xl font-semibold text-gray-500'>{user.name}</p>
            <p className='text-3xl font-semibold text-gray-500'>{user.email}</p>
        </div>
    }
    </div>
  )
}

export default Account