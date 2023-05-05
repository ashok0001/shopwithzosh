import React from "react";
import CartItem from "./CartItem";
import { Badge } from "@mui/material";

const Cart = () => {
  return (
    <div className="lg:grid grid-cols-3 lg:px-16 relative">
      <div className="lg:col-span-2 lg:px-5 bg-white">
        <div className="shadow-md px-5 py-3">
          <div className="">
            <span>Deliver to : </span>
            <span className="ml-1 font-semibold">Ashok Zarmariya, 363410</span>
            <Badge className="ml-3">Home</Badge>
          </div>
          <p className="opacity-70">
            Near altra school, Near altra vision school, 80 Feet Road, Raam...
          </p>
        </div>
        <div className="shadow-md mt-10">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
            <>
              {" "}
              <CartItem /> <hr />
            </>
          ))}
        </div>
      </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
        <div className="border p-5 bg-white">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
        <hr />

        <div className="space-y-3 font-semibold">
          <div className="flex justify-between pt-3 text-black ">
            <span>Price (3 item)</span>
            <span>₹1,18,985</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-700">− ₹35,100</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span className="text-green-700">Free</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-lg">
            <span>Total Amount</span>
            <span className="text-green-700">₹83,885</span>
          </div>
        </div>

        <button

          type="submit"
          className="w-full mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          CHECK OUT
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Cart;
