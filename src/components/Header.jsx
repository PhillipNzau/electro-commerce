import React, { lazy, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import Loading from "./Loading";
import SearchComponent from "./Search";
import logo from "../Logo.jpg";

const Header = () => {
  return (
    <div className=" bg-gray-50 py-4 min-h-screen h-max">
      <nav className="md:w-1/2 mx-auto flex items-center justify-between px-4 py-6 bg-white border-b gap-4">
        <img src={src/assets/logo.jpg} alt="Logo"/>

        
        <Link to="/" className="font-bold text-2xl">
          Fox Tag
        </Link>
         
        <SearchComponent />
        <div className="flex items-center gap-6 text-xl ">
          <Link
            to="/"
            className="text-gray-800 hover:text-orange-400 transition-all duration-200 "
          >
            Home
          </Link>
          <Link
            to="cart"
            className="text-gray-800 hover:text-black-400 transition-all duration-200 flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <p>Cart</p>
          </Link>
          <Link
            to="login"
            className="text-gray-800 hover:text-orange-400 transition-all duration-300 "
          >
            Login
          </Link>
        </div>
      </nav>

      <div className="md:w-1/2 mx-auto py-6 bg-white">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Header;
