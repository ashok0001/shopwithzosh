import { Grid } from '@mui/material'
import React from 'react'
import OrderTraker from './OrderTraker'
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import AddressCard from '../adreess/Adrees';


const OrderDetails = () => {
    const navigate=useNavigate();
  return (
    <div className=' px-2 lg:px-10 space-y-7'>
        <Grid container className='p-3 shadow-lg'>
            <Grid item xs={6}>
                <AddressCard/>
            </Grid>
        </Grid>
        <Grid className='shadow-xl rounded-md border'  container sx={{justifyContent:"space-between",alignItems:"center"}}>
            <Grid item xs={3}> <div className="flex  items-center p-2">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/krme93k0/lehenga-choli/9/t/e/free-half-sleeve-ghaghra-choli-coconut-original-imag5df5ktsnnypv.jpeg?q=70"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Printed Stitched Lehenga Choli</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Color: pink</span> <span>Size: M</span>
              </p>
              <p>Seller:</p>
              <p>₹8,995</p>
            </div>
          </div></Grid>
            <Grid item xs={6}><OrderTraker/>
            {/* <TimelineHorizontal/> */}
            </Grid>
            <Grid item xs={3}>
                <div onClick={()=>navigate(`/account/rate/{id}`)} className='flex items-center text-blue-600 cursor-pointer'>
                    <StarIcon sx={{fontSize: "2rem"}} className='px-2 text-5xl'/>
                    <span>Rate & Review Product</span>
                    
                </div>
            </Grid>
        </Grid>
    </div>
  )
}
// sx={{width:"10px",height:"10px"}}
export default OrderDetails