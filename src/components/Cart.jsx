import React, { useState, useEffect } from "react";

import Button from "./Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate, useLocation } from "react-router-dom";

const Cart = ({ productsId, onClick }) => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
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
      {filteredArray.map((product) => (
        <div
          key={product.id}
          className="grid grid-cols-1 md:grid-cols-10 gap-4 m-4"
        >
          <div className="col-span-1 md:col-span-7 bg-white rounded-md shadow-sm py-4 border ">
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
                <p>KSh {product.price}</p>
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
                  <button className=" w-8 h-8  text-center text-white bg-orange-400 text-2xl rounded-md flex items-center justify-center transition duration-300 hover:bg-orange-500">
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
                  <p>Amount</p>
                  <button className=" w-8 h-8 text-center text-white bg-orange-400 text-2xl rounded-md flex items-center justify-center transition duration-300 hover:bg-orange-500">
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
          <div className="col-span-1 md:col-span-3 bg-white rounded-md shadow-sm py-4 border space-y-4  ">
            <div className="border-b text-center">
              <p className="p-2">CART SUMMARY</p>
            </div>
            <div className="border-b">
              <p className="p-2 flex items-center justify-between text-sm">
                Subtotal <span className="text-xl">KSh {product.price}</span>
              </p>
            </div>
            <div className="mx-6">
              <Button text={`CHECKOUT (KSH ${product.price})`} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
