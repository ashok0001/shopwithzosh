import { Box, Grid, Typography } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import React from 'react'

const OrderCard = () => {
  return (
  <Box className='p-5 shadow-lg hover:shadow-2xl border'>

    <Grid spacing={2} container  >
            <Grid item xs={2} >
                
                <img className='w-[8rem] h-[8rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/krme93k0/lehenga-choli/9/t/e/free-half-sleeve-ghaghra-choli-coconut-original-imag5df5ktsnnypv.jpeg?q=70" alt="" />
            </Grid>
            <Grid item xs={3}>
                <p>Printed Stitched Lehenga Choli</p>
                <p><span>Color: pink</span> <span>Size: M</span></p>
            </Grid>
            <Grid item xs={3}>
                <p>₹8,995</p>
            </Grid>
            <Grid item xs={3}>
                <p className='space-y-2'><FiberManualRecordIcon sx={{width:"15px",height:"15px"}} className="text-green-700 p-0 mr-2 text-sm" /><span>Delivered On Mar 03</span> </p>
                <p>Your Item Has Been Delivered</p>
            </Grid>
        </Grid>
  </Box>
        

        
    
  )
}

export default OrderCard