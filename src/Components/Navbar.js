import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-red-500">
        <div className=" h-[75px] flex container mx-auto  justify-between items-center"> {/* Changed this line */}
          <div className="text-black font-bold text-lg"><Link to="https://github.com/anuragghimire8">My Website</Link></div>

          <div className="flex gap-2 font-bold">
            <div>
            <Link to ="/create">Create-Data</Link></div>
            <div><Link to="/read">All-Data</Link></div>
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
