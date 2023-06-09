import React, { useState, useEffect } from "react";

import Button from "./Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate, useLocation } from "react-router-dom";
import CartItem from "./CartItem";
import.meta.env.VITE_DEPLOYMENT;

const Cart = ({ productsId, onClick }) => {
  let apiUrl = "http://localhost:3001/products";
  if (import.meta.env.VITE_DEPLOYMENT === "true") {
    apiUrl = "https://products-api-virid.vercel.app/api/products";
  }
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [productsPrice, setProductsPrice] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Actual filter
  const filterArrayByIds = (array, ids) => {
    const numericIds = Array.from(ids).map((id) => parseInt(id));
    return array.filter((item) => numericIds.includes(item.id));
  };
  const filteredArray = filterArrayByIds(products, productsId);

  return (
    <>
      <div
        className="p-4 w-44 mx-4 border border-transparent  flex justify-start items-center gap-4 transition-all duration-300 group hover:border-gray-300 hover:cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 transition-all duration-300 group-hover:w-8 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
        Back
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-10 gap-4 m-4">
        {filteredArray.map((product) => (
          <CartItem onClick={onClick} key={product.id} product={product} />
        ))}
        <div className="md:absolute right-0 md:w-[250px] col-span-1 md:col-span-5 bg-white rounded-md shadow-sm py-4 border space-y-4  ">
          <div className="border-b text-center">
            <p className="p-2">CART SUMMARY</p>
          </div>
          <div className="border-b">
            <p className="p-2 flex items-center justify-between text-sm">
              Subtotal <span className="text-xl">KSh </span>
            </p>
          </div>
          <div className="mx-6">
            <Button text={`CHECKOUT (KSH )`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
