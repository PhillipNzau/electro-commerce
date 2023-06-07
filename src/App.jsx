import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import SelectedProduct from "./components/SelectedProduct";
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const Cart = lazy(() => import("./components/Cart"));

function App() {
  const [product, setProduct] = useState();
  const [cartProducts, setCartProducts] = useState([]);

  const handleAddToCart = (id) => {
    setProduct(id);
    console.log("set product id app", product);

    setCartProducts([...cartProducts, id]);

    console.log("set cart product id app", cartProducts);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home onClick={handleAddToCart} />} />
          <Route
            path=":prodId"
            element={<SelectedProduct onClick={handleAddToCart} />}
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
