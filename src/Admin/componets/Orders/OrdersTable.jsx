import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Grid, Select } from "@mui/material";
import { dressPage1 } from "../../../Data/dress/page1";

const OrdersTable = () => {
  const navigate = useNavigate();
  const [formData,setFormData]=useState({status:"",sort:""})

  const handleChange = (event) => {
   const name=event.target.name;
   const value=event.target.value;

   setFormData({...formData,[name]:value})
  };
  function handlePaginationChange(event, value) {
    console.log("Current page:", value);
  }

  return (
    <Box>
      <Card className="p-3">
        <CardHeader
          title="Sort"
          sx={{
            pt: 0,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.status}
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value={"PLACED"}>PLACED</MenuItem>
                <MenuItem value={"CONFIRMED"}>CONFIRMED</MenuItem>
                <MenuItem value={"DELIVERED"}>DELIVERED</MenuItem>
                <MenuItem value={"CANCELD"}>CANCLED</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
               Sort By
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.sort}
                label="Sort By"
                onChange={handleChange}
              >
                 <MenuItem value={"Newest"}>Newest</MenuItem>
                <MenuItem value={"Older"}>Older</MenuItem>
               
              
              </Select>
            </FormControl>
          </Grid>
         
        </Grid>
      </Card>
      <Card className="mt-2">
        <CardHeader
          title="All Orders"
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
          action={
            <Typography
              onClick={() => navigate("/admin/products")}
              variant="caption"
              sx={{ color: "blue", cursor: "pointer", paddingRight: ".8rem" }}
            >
              View All
            </Typography>
          }
          titleTypographyProps={{
            variant: "h5",
            sx: {
              lineHeight: "1.6 !important",
              letterSpacing: "0.15px !important",
            },
          }}
        />
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>

                <TableCell>Price</TableCell>
                <TableCell>Order Id</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dressPage1.slice(0, 10).map((item, index) => (
                <TableRow
                  hover
                  key={item.name}
                  sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                >
                  <TableCell>
                    {" "}
                    <Avatar alt={item.title} src={item.imageUrl} />{" "}
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

                  <TableCell>{item.discountedPrice}</TableCell>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Chip
                      sx={{ color: "white" }}
                      label="PLACED"
                      size="small"
                      color="success"
                      className="text-white"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Card className="mt-2 felx justify-center items-center">
        <Pagination
          className="py-5 w-auto"
          size="large"
          count={10}
          color="primary"
          onChange={handlePaginationChange}
        />
      </Card>
    </Box>
  );
};

export default OrdersTable;
