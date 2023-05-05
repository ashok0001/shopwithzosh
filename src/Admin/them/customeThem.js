import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    mode: "dark", // Set the custom color mode name here
    primary: {
      main: '#9155FD',
    },
    secondary: {
      main: '#f48fb1',
    },
    white:{
      main:"#fff"
    },
    background: {
      default: '',
      // paper: '#121019',
      paper:"rgb(0, 0, 22)"
    },
  },
 
  
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9155FD',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});

export {customTheme,darkTheme};
