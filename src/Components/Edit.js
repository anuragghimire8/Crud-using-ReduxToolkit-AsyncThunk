import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

const Edit = () => {
  const [updated, setUpdated] = useState();

  const { id } = useParams();
  const { users, loading } =useSelector((state) => state.app);

  useEffect(() => {
    if (id ) {
      const singleUser = users.filter((user) => user.id === id);

        setUpdated(singleUser);
      
    }
  }, []);

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/read');
  };

  return (
    <div>
      <h1>Edit The Data</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " onSubmit={handleSubmit}>
        <div className="mb-4 bg-black">
          <div className="flex flex-col items-center justify-center h-[500px] ">
            <h1 className="text-red-500 font-bold p-[15px] bg-white">Edit the data</h1>
            <label className="block text-white text-sm font-bold mb-2">Name</label>
            <input
              className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              value={updated && updated[0].name}
              type="text"
              placeholder="Name"
            />
            <label className="block text-white text-sm font-bold mb-2">Email</label>
            <input
              className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={updated && updated[0].email}
              placeholder="Email"
            />
            <label className="block text-white text-sm font-bold mb-2">Age</label>
            <input
              className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="age"
              type="number"
              value={updated && updated[0].age}
              placeholder="Age"
            />
          </div>
        </div>

        <div className="flex justify-center gap-2">
          <label className="font-bold text-xl">
            <input type="radio" value="Male" name="gender" checked={updated && updated.gender === 'Male'} />
            Male
          </label>
          <label className="font-bold text-xl">
            <input type="radio" value="Female" name="gender" checked={updated && updated[0].gender === 'Female'} />
            Female
          </label>
        </div>

        <div className="flex justify-center">
          <button className="bg-blue-500 rounded-full p-2 text-3xl font-bold">Edit</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
