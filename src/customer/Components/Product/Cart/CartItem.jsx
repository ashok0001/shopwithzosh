import React from "react";

const CartItem = () => {
  return (
    <div className="p-5">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-center"
            src="https://cdn.pixabay.com/photo/2016/12/10/16/57/shoes-1897708__340.jpg"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">RapidBox Sneakers For Men</p>
          <p className="opacity-70">Size: 8,White</p>
          <p className="opacity-70 mt-2">Seller: Trusource</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">{"₹1499"}</p>
            <p className="font-semibold text-lg">{"₹399"}</p>
            <p className="text-green-600 font-semibold">{"70%"} off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 opacity-60"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>

          <span className="py-1 px-7 border rounded-sm">4</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 opacity-60"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </div>
        <div className="flex space-x-5 text-sm lg:text-base mt-5 lg:mt-0">
          <span className="hover:text-blue-700 cursor-pointer font-semibold">
            SAVE FOR LATER
          </span>
          <span className="hover:text-blue-700 cursor-pointer font-semibold">
            REMOVE
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
