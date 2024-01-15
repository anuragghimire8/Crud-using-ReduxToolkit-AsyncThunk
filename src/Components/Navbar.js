import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-red-500">
        <div className=" h-[75px] flex container mx-auto  justify-between items-center"> {/* Changed this line */}
          <div className="text-black font-bold text-lg">My Website</div>

          <div className="flex gap-2 font-bold">
            <div>Create A Post</div>
            <div>All Post</div>
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
