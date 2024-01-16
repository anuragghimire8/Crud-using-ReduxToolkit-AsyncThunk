import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { showUser } from '../App/Features/userDetailSlice'

const Read = () => {

    const {users,loading}=useSelector((state)=>state.app)

 const dispatch=useDispatch()
      useEffect(()=>{
        dispatch(showUser())
        console.log(dispatch)
      },[])


  return (
    <div>
    { users && 
        users.map((user)=>(
            <div className='bg-blue-500 h-[225px] flex justify-center'>
            <div className='w-[2000px] h-[200px] bg-white flex justify-center items-center gap-5'>
            <div className='font-bold text-5xl'>name:{user.name},email:{user.email},age:{user.age},gender:{user.gender}</div>
            <div className='flex gap-4'>
            <Link to="/edit"><button className='bg-blue-500 h-[25px] w-[50px]'>Edit</button></Link>
            <Link to="/delete"><button className='bg-yellow-500 h-[25px] w-[50px]'>Delete</button></Link>
            </div>
            </div>
            </div>
        
        ))
        
    }
   
    </div>
  
  )
}

export default Read
