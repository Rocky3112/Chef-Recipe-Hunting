/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import { AuthCotext } from "../../Provider/AuthProvider";
import Footer from "../Footer/Footer";
import ActiveLink from "../ActiveLink/ActiveLink";
import './Navigation.css'
//this is a navbar with condition
const Navigation = () => {
  const { user, logOut } = useContext(AuthCotext);
  const [showName, setShowName] = useState(false); 

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  }

  return (
    <div>
      <div className="navbar bg-slate-300 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1">
          <p className="btn btn-ghost normal-case text-4xl font-semibold text-amber-500">Chef Garden</p>
        </div>
        <div className="md:flex items-center gap-4 mr-6 ">
          <ul className=" flex items-center gap-6 text-lg font-semibold px-2">
            <ActiveLink to="/" >Home</ActiveLink>
            <ActiveLink to="blog">Blog</ActiveLink>
            <Link className=" flex items-center gap-6"
              onMouseEnter={() => setShowName(true)} 
              onMouseLeave={() => setShowName(false)} 
            >
              <div className=" w-full relative">
                {user && (
                  <img className=" w-12 rounded-full" src={user.photoURL} alt="" />
                )}
                {showName && user && ( 
                  <div className="absolute top-0 left-0 bg-white rounded-md py-1 px-2 shadow-md">
                    {user.displayName}
                  </div>
                )}
              </div>
              {user ? (
                <div>
                  <Link onClick={handleLogOut} variant="secondary">
                    Logout
                  </Link>
                </div>
              ) : (
                <ActiveLink to="/login">
                  Login
                </ActiveLink>
              )}
            </Link>
          </ul>
        </div>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Navigation;


