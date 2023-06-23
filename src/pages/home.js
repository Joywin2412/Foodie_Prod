import React from "react";
import {
  Typography,
  Toolbar,
  Box,
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  styled,
  AppBar,
  CssBaseline,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { DinnerDining } from "@mui/icons-material";
import CustomAppBar from "./styles.js";
import DinnerIcon from "./styles2.js";
import Form from "./form.js";
import Navbar from "./navbar.js";
import LoadingPage from "./loading.js";
const Home = () => {
  // let theme = createTheme();
  // theme = responsiveFontSizes(theme);
  let theme = createTheme();
  theme = createTheme({
    typography: {
      h2: {
        color: "#ffffff",
        fontFamily: [
          "Poppins",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
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
          fontSize: "10vh",
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <CustomAppBar sx={{ position: "static" }}>
          <Toolbar>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <DinnerIcon />
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography variant="h2"> Foodie </Typography>{" "}
              </Link>
            </Grid>

            <Navbar></Navbar>
          </Toolbar>
        </CustomAppBar>
        <Form></Form>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;
