import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import React from "react";
import { dressPage1 } from "../../../Data/dress/page1";


const ProductsTable = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  function handlePaginationChange(event, value) {
    console.log("Current page:", value);
  }

  return (
    <Box width={"100%"}>
        
      <Card className="p-3">
     
      <CardHeader
          title='Sort'
          sx={{ pt: 0, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          
        />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value={"Dresses"}>Dresses</MenuItem>
                <MenuItem value={"Saree"}>Saree</MenuItem>
                <MenuItem value={"Lengha-Choli"}>Lengha Choli</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Availability</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Availability"
                onChange={handleChange}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Instock"}>Instock</MenuItem>
                <MenuItem value={"Out-Of-Stack"}>Out Of Stock</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item  xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Stock</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Stock"
                onChange={handleChange}
              >
                <MenuItem value={"heigh-low"}>Heigh - Low</MenuItem>
                <MenuItem value={"low-heigh"}>Low - Heigh</MenuItem>
                
              </Select>
            </FormControl>
          </Grid>
          
        </Grid>
      </Card>
      <Card className="mt-2">
      <CardHeader
          title='All Products'
          sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          
        />
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Update</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dressPage1.slice(0, 10).map((item) => (
                <TableRow
                  hover
                  key={item.name}
                  sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                >
                  <TableCell>
                    {" "}
                    <Avatar alt={item.titel} src={item.imageUrl} />{" "}
                  </TableCell>

                  <TableCell
                    sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "0.875rem !important",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="caption">{item.brand}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{"dress"}</TableCell>
                  <TableCell>{item.discountedPrice}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>
                    <Button variant="text">Update</Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="text">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Card className="mt-2 felx justify-center items-center border">
        <Pagination
          className="py-5 border w-auto"
          size="large"
          count={10}
          color="primary"
          onChange={handlePaginationChange}
        />
      </Card>
    </Box>
  );
};

export default ProductsTable;
