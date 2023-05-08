import { Box, Grid, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React from "react";
import { useNavigate } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';

const OrderCard = ({product}) => {
    const navigate=useNavigate();
  return (
    <Box  className="p-5 shadow-lg hover:shadow-2xl border ">
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div onClick={()=>navigate(`/account/order/${product}`)} className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/krme93k0/lehenga-choli/9/t/e/free-half-sleeve-ghaghra-choli-coconut-original-imag5df5ktsnnypv.jpeg?q=70"
              alt=""
            />
            <div className="ml-5">
              <p className="mb-2">Printed Stitched Lehenga Choli</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Color: pink</span> <span>Size: M</span>
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹8,995</p>
        </Grid>
        <Grid item xs={4}>
          <p className="space-y-2 font-semibold">
            <FiberManualRecordIcon
              sx={{ width: "15px", height: "15px" }}
              className="text-green-600 p-0 mr-2 text-sm"
            />
            <span>Delivered On Mar 03</span>{" "}
          </p>
          <p className="text-xs">Your Item Has Been Delivered</p>
          <div onClick={()=>navigate(`/account/rate/{id}`)} className='flex items-center text-blue-600 cursor-pointer'>
                    <StarIcon sx={{fontSize: "2rem"}} className='px-2 text-5xl'/>
                    <span>Rate & Review Product</span>
                    
                </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderCard;
