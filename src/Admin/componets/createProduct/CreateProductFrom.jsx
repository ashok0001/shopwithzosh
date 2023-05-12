import { useState } from "react";
import { Typography } from '@mui/material';
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Box } from "mdi-material-ui";
import { Fragment } from "react";
import { customTheme } from "../../them/customeThem";
import { ThemeProvider } from "@emotion/react";
import "./CreateProductForm.css"
const CreateProductForm = () => {
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPersent: "",
    size: [{ name: "", quantity: "" }],
    quantity: "",
    topLavelCategory: "",
    secondLavelCategory: "",
    thirdLavelCategory: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSizeChange = (e, index) => {
    const { name, value } = e.target;
    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  const handleAddSize = () => {
    const sizes = [...productData.size];
    sizes.push({ name: "", quantity: "" });
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  const handleRemoveSize = (index) => {
    const sizes = [...productData.size];
    sizes.splice(index, 1);
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };

  return (
    <Fragment className="createProductContainer ">
   <Typography variant="h3" sx={{textAlign:"center"}}  className="py-10 text-center ">Add New Product</Typography>
      <form onSubmit={handleSubmit} className="createProductContainer min-h-screen">
       
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discountPersent"
              value={productData.discountPersent}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLavelCategory"
                value={productData.topLavelCategory}
                onChange={handleChange}
              >
                <MenuItem value="Men">Men</MenuItem>
                <MenuItem value="Women">Women</MenuItem>
                <MenuItem value="Kids">Kids</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="secondLavelCategory"
                value={productData.secondLavelCategory}
                onChange={handleChange}
              >
                <MenuItem value="Men">Clothing</MenuItem>
                <MenuItem value="Women">Accessories</MenuItem>
                <MenuItem value="Kids">Brands</MenuItem>

              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="thirdLavelCategory"
                value={productData.thirdLavelCategory}
                onChange={handleChange}
              >
                <MenuItem value="Tops">Tops</MenuItem>
                <MenuItem value="Dresses">Dresses</MenuItem>
                <MenuItem value="T-Shirts">T-Shirts</MenuItem>
                <MenuItem value="Saree">Saree</MenuItem>
                <MenuItem value="Saree">Saree</MenuItem>
                <MenuItem value="Lengha Choli">Lengha Choli</MenuItem>
                
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} >
            {/* <TextField
            id="outlined-textarea"
              fullWidth
              label="Discount Percentage"
              name="discountPersent"
              value={productData.discountPersent}
              onChange={handleChange}
            //   rows={4}
            /> */}
             <TextField
             fullWidth
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={3}
          
        />
          </Grid>
          <Grid item xs={12}>
                <Button variant="contained" sx={{p:1.8}} className="py-20" size="large">
                Add New Product
            </Button>
        
          </Grid>
        </Grid>
        
        
      </form>
   
    </Fragment>
  );
};

export default CreateProductForm;
