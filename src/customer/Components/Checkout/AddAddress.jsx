import * as React from 'react';
import { Grid, TextField, Button,Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../../Redux/Customers/Order/Action';

export default function AddDeliveryAddressForm({handleNext}) {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
   
    const address={
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      streetAddress: data.get('address'),
      city: data.get('city'),
      state: data.get('state'),
      zipCode: data.get('zip'),
      mobile: data.get('phoneNumber'),
    }
    console.log("form data",address)
   dispatch(createOrder({address,jwt,navigate}))

    // after perfoming all the opration
    handleNext();
  };

  return (
    <React.Fragment className="border shadow-lg">
      <Box className="border shadow-lg p-5 rounded-md">
{/* <h1 className='text-lg font-bold pb-3'>{title}</h1> */}
         <form  onSubmit={handleSubmit} >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address"
              name="address"
              label="Address"
              fullWidth
              autoComplete="shipping address"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              fullWidth
              autoComplete="tel"
            />
          </Grid>
          <Grid item xs={12}>
            <Button sx={{padding:"1rem 1.5rem"}} size='large' type="submit" variant="contained" color="primary">
              Add Delivery Address
            </Button>
          </Grid>
        </Grid>
      </form>
      </Box>
     
    </React.Fragment>
  );
}
