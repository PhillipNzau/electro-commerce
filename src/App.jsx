import { useState } from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Button from "./components/Button";
import Cart from "./components/Cart";

function App({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}

export default App;
