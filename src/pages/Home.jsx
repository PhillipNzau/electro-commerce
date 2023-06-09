import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

import Button from '../components/Button';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const handleOnClick = (id) => {
    navigate(`/${id}`, { state: { id } });
  };

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
     <div className=" mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 shadow-md rounded-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:cursor-pointer"
            >
              <div
                onClick={() => {
                  handleOnClick(product.id);
                }}
              >
                <LazyLoadImage
                  effect="blur"
                  src={product.image}
                  alt={product.productName}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <div className="text-gray-800">
                  <h2 className="text-lg font-semibold mb-2">
                    {product.productName}
                  </h2>
                  <p className="text-gray-600 line-clamp-3">
                    {product.description}
                  </p>
                  <p className="text-lg font-semibold mt-4">${product.price}</p>
                </div>
              </div>
              <Button
                text="Add to Cart"
                width={150}
                onClick={() => onClick(product.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home;
