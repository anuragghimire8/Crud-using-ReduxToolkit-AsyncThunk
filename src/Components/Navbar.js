import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const allUsers=useSelector((state)=>state.app.users)

  return (
    <div>
      <nav className="bg-red-500">
        <div className=" h-[75px] flex container mx-auto  justify-between items-center"> {/* Changed this line */}
          <div className="text-black font-bold text-lg"><Link to="https://github.com/anuragghimire8">My Website</Link></div>

          <div className="flex gap-10 font-bold">
            <div>
            <Link to ="/create">Create-Data</Link></div>
            <div><Link to="/read">All-Data-{allUsers.length}</Link></div>
            <div>
              <form>
                <input className='rounded-[12px]' type="text" placeholder='Search Here' />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
