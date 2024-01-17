import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser, showUser } from '../App/Features/userDetailSlice';

const Read = () => {
  const { users } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  const deleteUsers = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <h2>All data</h2>
      {users &&
        users.map((user) => (
          <div className='bg-blue-500 h-[225px] flex justify-center' key={user.id}>
            <div className='w-[2000px] h-[200px] bg-white flex justify-center items-center gap-1'>
              <div className='font-bold text-5xl'>
                name: {user.name}, email: {user.email}, age: {user.age}, gender: {user.gender}
              </div>
              <div className='flex'>
                {/* Pass all user details as state to the Edit component */}
                <Link
                  to={{
                    pathname: `/edit/${user.id}`,
                    state: {
                      user: user,
                    },
                  }}
                >
                  <button className='bg-blue-500 h-[25px] w-[50px]'>Edit</button>
                </Link>
                <button onClick={() => deleteUsers(user.id)} className='bg-yellow-500 h-[25px] w-[50px]'>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Read;
