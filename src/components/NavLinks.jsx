import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function NavLinks() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div
        className="md:hidden cursor-pointer text-2xl flex items-center justify-center text-gray-500"
        onClick={() => setShowNav(!showNav)}
      >
        <RiMenuFill />
      </div>
      <div
        className={`text-gray-500 font-roboto text-sm flex flex-col gap-4 bg-white items-center w-full p-4 lg:relative lg:top-0 lg:w-auto lg:flex-row ${
          showNav ? " absolute left-0 top-16" : " hidden lg:flex"
        }`}
      >
        <NavLink
          to="/explore"
          className="transition-colors duration-200 
      hover:text-cyan-400
      active:text-gray-700 active:bg-cyan-100 active:rounded-md active:font-semibold
     cursor-pointer py-2 px-4 block rounded-md  text-center"
        >
          Explore
        </NavLink>
        <NavLink to='/CreateEvent'
          className="transition-colors duration-200
      hover:text-cyan-400
      active:text-gray-700 active:bg-cyan-100 active:rounded-md active:font-semibold
     cursor-pointer py-2 px-4 block rounded-md  text-center"
        >
          Create Event
        </NavLink>
        <NavLink
          className="hover:bg-orange-600 transition-colors duration-200 hover:shadow-sm cursor-pointer bg-orange-500 text-white py-2 px-4 block rounded-md  text-center"
          to="/Account"
        >
          Account
        </NavLink>
      </div>
      
    </>
  );
}

export default NavLinks;
