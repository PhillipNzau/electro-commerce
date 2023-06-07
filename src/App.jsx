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
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [cartProducts, setCartProducts] = useState([]);

  const handleAddToCart = (productId) => {
    console.log("chikaa", productId);
    setProduct(productId);
    console.log("set product id app", product);

    setCartProducts((prevCartProducts) => [...prevCartProducts, product]);

    console.log("set cart product id app", cartProducts);
  };
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Handle search
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Actual filter
  const filteredData = products.filter((item) =>
    item.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Header onChange={handleSearch} searchQuery={searchQuery} />}
        >
          <Route
            path="/"
            element={<Home onClick={handleAddToCart} products={filteredData} />}
          />
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
