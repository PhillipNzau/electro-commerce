import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate, useLocation } from "react-router-dom";

import Button from "./Button";

const SelectedProduct = () => {
  const CartSvg = {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.6}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <route
          strokeLinecap="round"
          strokeLinejoining="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    ),
  };

  const navigate = useNavigate();
  const { state: routeState } = useLocation();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${routeState.id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <>
      <div
        className="p-4 w-44 mx-4 border border-transparent  flex justify-center items-center gap-4 transition-all duration-300 group hover:border-gray-300 hover:cursor-pointer"
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
          <route
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
        Back
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 py-6">
        <LazyLoadImage
          effect="blur"
          className="w-full h-full col-span-1 rounded-md"
          src={product.image}
          alt="product image"
        />

        <div className="space-y-4 col-span-2">
          <p>{product.productName}</p>
          <p>
            <span>Brand: Brand name</span>
          </p>
          <p>Rating: {product.rating}</p>
          <Button svg={CartSvg.icon} text="Add to cart" />
        </div>
      </div>
      <div className="bg-gray-50 min-h-10 h-10 min-w-full "></div>
      <div>
        <div className="border-b">
          <p className="p-4">Product Details</p>
        </div>

        <div className="p-4 space-y-4">
          <p>{product.description}</p>

          <div className="space-y-1">
            <p className="text-lg">Cpu</p>
            <p>{product.cpu}</p>
          </div>
          <div className="space-y-1">
            <p className="text-lg">Ram</p>
            <p>{product.ram}</p>
          </div>
          <div className="space-y-1">
            <p className="text-lg">Storage</p>
            <p>{product.storage}</p>
          </div>

          <div className="space-y-1">
            <p className="text-lg">Screen</p>
            <p>{product.screen}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedProduct;
