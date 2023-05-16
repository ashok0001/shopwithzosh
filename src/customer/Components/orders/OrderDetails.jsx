import { Alert, Box, Button, Grid,Typography } from '@mui/material'
import React from 'react'
import OrderTraker from './OrderTraker'
import StarIcon from '@mui/icons-material/Star';
import { useNavigate, useParams } from 'react-router-dom';
import AddressCard from '../adreess/AdreessCard';
import { deepPurple } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOrderById } from '../../../Redux/Customers/Order/Action';
import CheckIcon from '@mui/icons-material/Check';

const OrderDetails = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {orderId}=useParams();
  const {order}=useSelector(store=>store);

  console.log("order",order.order)

  useEffect(()=>{
    dispatch(getOrderById({jwt,orderId:Number(orderId)}))
  },[])

    const navigate=useNavigate();
  return (
    <div className=' px-2 lg:px-36 space-y-7 '>
     
        <Grid container className='p-3 shadow-lg'>
          
          <Grid xs={12}>
            <p className='font-bold text-lg py-2'>Delivery Address</p>
          </Grid>
            <Grid item xs={6}>
                <AddressCard address={order.order?.shippingAddress}/>
            </Grid>
        </Grid>
        <Box className="p-5 shadow-lg border rounded-md">
          <Grid container sx={{justifyContent:"space-between",alignItems:"center"}}>
        <Grid  item xs={9} >
          <OrderTraker activeStep={order.order?.orderStatus==="PLACED"?1:order.order?.orderStatus==="CONFIRMED"?2:order.order?.orderStatus==="SHIPPED"?3:4}/>
          
          </Grid>
          <Grid item >
          
                <Button sx={{ color: deepPurple[500],}} variant='text'>cancel order</Button>
              
          </Grid>
        </Grid>
        </Box>
        
        <Grid className='shadow-xl rounded-md border'  container sx={{justifyContent:"space-between",alignItems:"center"}}>
            <Grid item xs={3}> 
           </Grid>
            
        </Grid>

        <Grid container className='space-y-5'>
          
          {order.order?.orderItems.map((item)=> 
          <Grid container item className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:"space-between"}}> 
          <Grid item xs={6}> <div className="flex  items-center ">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src={item?.product.imageUrl}
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">{item.product.title}</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Color: pink</span> <span>Size: {item.size}</span>
              </p>
              <p>Seller: {item.product.brand}</p>
              <p>₹{item.price}</p>
            </div>
          </div>
          </Grid>
          <Grid item >
          { <Box sx={{ color: deepPurple[500]}} onClick={()=>navigate(`/account/rate/${item.id}`)} className='flex items-center cursor-pointer'>
               <StarIcon sx={{fontSize: "2rem"}} className='px-2 text-5xl'/>
               <span>Rate & Review Product</span>
               
           </Box>}
         
       </Grid>
          </Grid>
         
          )}
        </Grid>
    </div>
  )
}
// sx={{width:"10px",height:"10px"}}
export default OrderDetails