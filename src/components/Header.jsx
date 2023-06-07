import React, { lazy, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import Loading from "./Loading";

const Header = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="login">Login</Link>
      </nav>

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
