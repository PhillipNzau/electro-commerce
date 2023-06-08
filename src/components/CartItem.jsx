import React, { useState, useEffect } from "react";

import Button from "./Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate, useLocation } from "react-router-dom";

const CartItem = ({ product, onClick }) => {
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(product.price);
  const handleRemoveAmount = (amount, curPrice) => {
    if (amount <= 1) {
      return;
    }

    setAmount(amount - 1);
    setPrice(parseInt(price) - parseInt(curPrice));
  };
  const handleAddAmount = (amount, curPrice) => {
    setAmount(+amount + 1);
    setPrice(parseInt(price) + parseInt(curPrice));
  };

  return (
    <div key={product.id} className="col-span-1 md:col-span-7">
      <div className=" bg-white rounded-md shadow-sm py-4 border ">
        <div className="border-b">
          <p className="p-2">Cart Item</p>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <LazyLoadImage
                effect="blur"
                className="w-20 h-20"
                src={product.image}
                alt={product.productName}
              />
              <p>{product.productName}</p>
            </div>
            <p>KSh {price}</p>
          </div>
          <div className="flex items-center   justify-between">
            <p
              className="flex items-center gap-2 text-orange-400 transition duration-300 hover:text-orange-500 hover:cursor-pointer"
              onClick={() => onClick(product.id)}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </span>
              Remove
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => handleRemoveAmount(amount, product.price)}
                className=" w-8 h-8  text-center text-white bg-orange-400 text-2xl rounded-md flex items-center justify-center transition duration-300 hover:bg-orange-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </button>
              <p>{amount}</p>
              <button
                onClick={() => handleAddAmount(amount, product.price)}
                className=" w-8 h-8 text-center text-white bg-orange-400 text-2xl rounded-md flex items-center justify-center transition duration-300 hover:bg-orange-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
