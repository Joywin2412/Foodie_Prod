import React, {
  Component,
  useState,
  useEffect,
  useId,
  useGlobalContext,
} from "react";
import { Link } from "react-router-dom";
// import { Button } from "@mui/material";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material";

import {
  Typography,
  Toolbar,
  Box,
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  styled,
  CssBaseline,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  IconButton,
  // InboxIcon,
} from "@mui/material";
import CustomMenu from "./styles3.js";
import { Menu } from "@mui/icons-material";
const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };
  let theme = createTheme();
  theme = createTheme({
    typography: {
      h2: {
        color: "#000000",
        fontFamily: [
          "OpenSans",
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
          fontSize: "3vh",
        },

        [theme.breakpoints.up("sm")]: {
          fontSize: "3vh",
        },

        [theme.breakpoints.up("md")]: {
          fontSize: "3vh",
        },

        [theme.breakpoints.up("lg")]: {
          fontSize: "4vh",
        },
        fontWeight: "400",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <div position="static">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <CustomMenu />
              </IconButton>
              <Typography variant="h6"></Typography>
            </Toolbar>
          </div>
          <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
            <List>
              <ListItem onClick={handleMenuClose}>
                <ListItemText>
                  {" "}
                  <Link to="/" style={{ textDecoration: "none" }}>
                    {" "}
                    <Typography variant="h2">Home </Typography>{" "}
                  </Link>{" "}
                </ListItemText>
              </ListItem>
              <ListItem onClick={handleMenuClose}>
                <ListItemText>
                  {" "}
                  <Typography variant="h2">About Us</Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Drawer>
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
};

export default Home;
