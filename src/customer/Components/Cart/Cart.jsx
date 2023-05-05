import React from "react";
import CartItem from "./CartItem";
import { Badge,Button } from "@mui/material";

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

        <Button
                variant="contained"
                  type="submit"
                  sx={{padding:".8rem 2rem", marginTop:"2rem", width:"100%"}}
                >
                  Add To Cart
                </Button>
        </div>
        
      </div>
    </div>
  );
};

export default Cart;
