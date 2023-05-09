import * as React from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginUserForm({ handleNext }) {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      address: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zip: data.get("zip"),
      phoneNumber: data.get("phoneNumber"),
    });
    console.log("form data", data);
    navigate({
      search: "step=3",
    });
    // after perfoming all the opration
    handleNext();
  };

  return (
    <React.Fragment className=" shadow-lg ">
      <form className="w-full" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{padding:".8rem 0"}}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
         <div className="py-3 flex items-center">
        <p className="m-0 p-0">don't have account ?</p>
        <Button onClick={()=> navigate("/register")} className="ml-5" size="small">
          Register
        </Button>
        </div>
      </div>
     
    </React.Fragment>
  );
}
