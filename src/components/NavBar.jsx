import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdAdd, IoMdArrowBack } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { useState } from "react";
import Logo from "../ui/Logo";
import { CiLogout, CiMail } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { useLogout } from "../features/authentication/useLogout";
import { useUser } from "../features/authentication/useUser";

function NavBar() {
  const [showNav, setShowNav] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const { logOut, isLoading } = useLogout();
   const { user } = useUser();


  
  return (
    <nav className="fixed top-0 left-0 z-10 w-full">
      <div className="flex justify-between px-4 py-4 shadow-md bg-white ">
        <Logo path="/CreateEvent" />
        <div className="flex items-center gap-4 ">
          <p
            onClick={() => setShowNav(!showNav)}
            className={`flex item-center border rounded-full border-gray-500 p-2.5 ${
              showNav ? "bg-gray-100" : "bg-white"
            } cursor-pointer`}
          >
            <CgMenuGridO />
          </p>
          <p className="flex item-center border rounded-full p-2.5 text-orange-500">
            <IoMdAdd />
          </p>
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="border cursor-pointer rounded-full border-gray-500 px-1 py-0.5 flex gap-1 items-center"
          >
            <span className="border bg-green-600 p-1.5 text-white font-bold rounded-full text-sm flex items-center justify-center">
              AB
            </span>
            <span className="flex justify-center items-center text-2xl">
              <RiArrowDropDownLine />
            </span>
            {showDropdown && (
              <div className="absolute  bg-white shadow-lg rounded-md mt-2 right-0 top-12 ">
                <ul className="p-2 flex flex-col gap-1 text-gray-700 font-semibold text-sm">
                  <li className=" hover:bg-gray-100   flex items-center gap-1">
                    <FaRegUser />
                    {user?.user_metadata?.firstName || "User"}
                  </li>
                  <li className=" hover:bg-gray-100  flex items-center gap-1">
                    <CiMail />
                    {(user?.email?.length > 20)
                      ? user.email.slice(0, 20) + "..."
                      : user?.email || "User"}
                  
                  </li>
                  <li
                    onClick={logOut}
                    className={` hover:bg-gray-100 cursor-pointer flex items-center gap-1} ${
                      isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <CiLogout /> 
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {showNav && (
        <div className="flex justify-between px-2 py-4 bg-gray-100">
          <ul className="flex justify-around gap-4 text-gray-700 font-semibold text-sm flex-wrap">
            <NavLink
              to="/CreateEvent"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold"
                  : "hover:text-orange-500 cursor-pointer"
              }
            >
              Create Event
            </NavLink>
            <NavLink
              to="/ManageEvents"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold"
                  : "hover:text-orange-500 cursor-pointer"
              }
            >
              My Events
            </NavLink>
            <NavLink
              to="/CheckIn"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold"
                  : "hover:text-orange-500 cursor-pointer"
              }
            >
              Check In
            </NavLink>
            

            <NavLink
              to="/Explore"
              className={({ isActive }) =>
                isActive
                  ? "font-bold flex items-center gap-1 text-cyan-400"
                  : "hover:text-orange-500 cursor-pointer flex items-center gap-1 text-cyan-400"
              }
            >
              <IoMdArrowBack /> Explore Event
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
