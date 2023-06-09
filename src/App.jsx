import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import SelectedProduct from "./components/SelectedProduct";
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const Cart = lazy(() => import("./components/Cart"));
import.meta.env.VITE_DEPLOYMENT;

function App() {
  let apiUrl = "http://localhost:3001/products";
  if (import.meta.env.VITE_DEPLOYMENT === "true") {
    apiUrl = "https://products-api-virid.vercel.app/api/products";
  }
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const [product, setProduct] = useState();
  const [cartProducts, setCartProducts] = useState([]);

  const [products, setProducts] = useState([]);

  const handleAddToCart = (productId) => {
    setProduct(productId);
    if (!cartProducts.some((existingItem) => existingItem === productId)) {
      setCartProducts((prevCartProducts) => [...prevCartProducts, productId]);
    }
  };

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      return;
    }
  }, [product, cartProducts]);

  useEffect(() => {
    fetch(apiUrl)
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

  const removeItemById = (id) => {
    setCartProducts((prevArray) => prevArray.filter((item) => item !== id));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Header
              onChange={handleSearch}
              searchQuery={searchQuery}
              productCount={cartProducts.length}
            />
          }
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
          <Route
            path="cart"
            element={
              <Cart productsId={cartProducts} onClick={removeItemById} />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
