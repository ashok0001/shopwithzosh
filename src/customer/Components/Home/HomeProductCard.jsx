import React from "react";
import { Button,IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const HomeProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product?.image}
          alt={product?.title}
        />
      </div>

      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">{product?.brand || product?.title}</h3>
        <p className="mt-2 text-sm text-gray-500">{product?.title }</p>
      </div>
      {/* <Button
      size="small"
        sx={{ borderRadius: "5px 5px 0px 0px" }}
        variant="contained"
        color="primary"
      >
        Add To Cart <IconButton aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      </Button> */}
    </div>
  );
};

export default HomeProductCard;
