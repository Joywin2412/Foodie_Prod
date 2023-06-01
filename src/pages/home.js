import React from "react";
import {
  Typography,
  Toolbar,
  Box,
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  styled,
} from "@mui/material";
import { DinnerDining } from "@mui/icons-material";
import CustomAppBar from "./styles.js";
import DinnerIcon from "./styles2.js";

const Home = () => {
  // let theme = createTheme();
  // theme = responsiveFontSizes(theme);
  let theme = createTheme();
  theme = createTheme({
    typography: {
      h2: {
        fontFamily: [
          "Poppins",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
        [theme.breakpoints.up("xs")]: {
          fontSize: "4vh",
        },

        [theme.breakpoints.up("sm")]: {
          fontSize: "6vh",
        },

        [theme.breakpoints.up("md")]: {
          fontSize: "8vh",
        },

        [theme.breakpoints.up("lg")]: {
          fontSize: "8vh",
        },
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CustomAppBar>
          <Toolbar>
            <DinnerIcon />

            <Typography variant="h2"> Foodie </Typography>
          </Toolbar>
        </CustomAppBar>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </ThemeProvider>
    </div>
  );
};

export default Home;
