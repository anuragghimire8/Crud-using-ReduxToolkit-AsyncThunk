
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-red-500">
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          <div className="text-black font-bold text-lg ">My Website</div>

          <div className="flex gap-2 font-bold">
            <div>Create A Post</div>
            <div>All Post</div>
            <div>
            <form>
            <input className='rounded-[12px] '  type="text" placeholder='Search Here'>
            </input>
            </form>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
