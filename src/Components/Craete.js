import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../App/Features/userDetailSlice';

const Create = () => {
  const [users, setUser] = useState({});
  const dispatch=useDispatch()

  useEffect(() => {
    console.log(users);
  }, [users]);

  const getUserData = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
  };


  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(users)
        dispatch(createUser(users))
  }
  return (
    <div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " onSubmit={handleSubmit}>
        <div className="mb-4 bg-black">
          <div className='flex flex-col items-center justify-center h-[500px] '>
            <label className="block text-white text-sm font-bold mb-2 "  >
              Name
            </label>
            <input className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  name="name" type="text" placeholder="Name" onChange={getUserData} />
            <label className="block text-white text-sm font-bold mb-2" >
              Email
            </label>
            <input className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="email" name='email' placeholder="Email" onChange={getUserData}/>
            <label className="block text-white  text-sm font-bold mb-2" htmlFor="username">
              Age
            </label>
            <input className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  name="age" type="number" placeholder="Age"  onChange={getUserData}/>
          </div>
        </div>

        <div className='flex justify-center gap-2'>
          <label className='font-bold text-xl'>
            <input
              type="radio"
              value="male"
              name="gender"  
              onChange={getUserData}
            />
            Male
          </label>
          <label className='font-bold text-xl'>
            <input
              type="radio"
              value="female"
              name="gender" 
              onChange={getUserData} 
            />
            Female
          </label>
        </div>

        <div className='flex justify-center '>
          <button className='bg-blue-500 rounded-full p-2 text-3xl font-bold'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Create;
