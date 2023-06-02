import React, {
  Component,
  useState,
  useEffect,
  useId,
  useGlobalContext,
} from "react";
import {
  Typography,
  Toolbar,
  Box,
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  styled,
  Grid,
  CssBaseline,
} from "@mui/material";
import { DinnerDining } from "@mui/icons-material";
import { Link } from "react-router-dom";
import CustomAppBar from "./styles.js";
import DinnerIcon from "./styles2.js";
import { useParams } from "react-router-dom";
import Navbar from "./navbar.js";
import axios from "axios";
import LoadingPage from "./loading.js";

const Home = () => {
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
          fontSize: "10vh",
        },
      },
      h3: {
        color: "#474747",
        marginBottom: "30px",
        fontFamily: [
          "Open Sans",
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
          fontSize: "4vh",
        },

        [theme.breakpoints.up("md")]: {
          fontSize: "5vh",
        },

        [theme.breakpoints.up("lg")]: {
          fontSize: "5vh",
        },
      },
      h4: {
        marginBottom: "6px",
        fontFamily: [
          "Open Sans",
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
          fontSize: "1.9vh",
        },

        [theme.breakpoints.up("sm")]: {
          fontSize: "2vh",
        },

        [theme.breakpoints.up("md")]: {
          fontSize: "2.3vh",
        },

        [theme.breakpoints.up("lg")]: {
          fontSize: "2.5vh",
        },
      },
      h5: {
        color: "#9B9B9B",
        lineHeight: 2,
        fontFamily: [
          "Open Sans",
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
          fontSize: "0.6rem",
        },

        [theme.breakpoints.up("sm")]: {
          fontSize: "0.8rem",
        },

        [theme.breakpoints.up("md")]: {
          fontSize: "1rem",
        },

        [theme.breakpoints.up("lg")]: {
          fontSize: "1rem",
        },
        fontWeight: 400,
      },
      h7: {
        color: "#474747",
        [theme.breakpoints.up("xs")]: {
          fontSize: "0.8rem",
        },

        [theme.breakpoints.up("sm")]: {
          fontSize: "1rem",
        },

        [theme.breakpoints.up("md")]: {
          fontSize: "1.2rem",
        },

        [theme.breakpoints.up("lg")]: {
          fontSize: "1.3rem",
        },
        fontWeight: 600,
      },
    },
  });
  const id = useParams();
  const [loading, setLoading] = useState(0);
  const [instruction, setInstruction] = useState([]);
  const [nutrition, setNutrition] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [img, setImg] = useState([]);

  const fetchData = async () => {
    setLoading(1);
    console.log(id);
    console.log(`${id}`);
    try {
      let s = `${process.env.REACT_APP_URL}/${id.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`;
      const requestOptions = {
        headers: { "Content-Type": "application/json" },
      };
      const d_now = await axios.get(s, requestOptions);
      console.log(d_now.data);
      setInstruction(d_now.data.analyzedInstructions[0].steps);
      setImg(d_now.data.image);
      // setDishes(d_now.data);
      // setLoading(0);
    } catch (err) {
      console.log(err);
      // setLoading(0);
    }

    try {
      let s = `${process.env.REACT_APP_URL}/${id.id}/nutritionWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`;
      const requestOptions = {
        headers: { "Content-Type": "application/json" },
      };
      const d_now = await axios.get(s, requestOptions);
      console.log(d_now.data);
      setNutrition(d_now.data.bad);

      // setInstruction(d_now.data.analyzedInstructions[0].steps);
      // setDishes(d_now.data);
      // setLoading(0);
    } catch (err) {
      console.log(err);
      // setLoading(0);
    }

    try {
      let s = `${process.env.REACT_APP_URL}/${id.id}/ingredientWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`;
      const requestOptions = {
        headers: { "Content-Type": "application/json" },
      };
      const d_now = await axios.get(s, requestOptions);
      console.log(d_now.data);
      setIngredient(d_now.data.ingredients);

      setLoading(0);
    } catch (err) {
      console.log(err);
      setLoading(0);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <LoadingPage></LoadingPage>;
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Box sx={{ flexGrow: "1" }}>
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
          </Grid>
        </Box>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            margin: "2rem",
            alignItems: "center",
          }}
        >
          <img
            src={`https://www.tutorialspoint.com/opencv/images/opencv-mini-logo.jpg`}
            sx={{ maxWidth: "100%", height: "auto" }}
          ></img>
          <span>
            <Typography variant="h3" style={{ textAlign: "left" }}>
              {" "}
              Nutrition
            </Typography>
            <div style={{ textAlign: "left" }}>
              {nutrition
                ? nutrition.map((curr_val, curr_idx, arr) => {
                    return (
                      <Typography variant="h4">
                        {" "}
                        {curr_val.title} {curr_val.amount}
                      </Typography>
                    );
                  })
                : ""}
            </div>
          </span>
        </Grid>
        {instruction
          ? instruction.map((curr_val, curr_idx, arr) => {
              return (
                <Typography variant="h5" style={{ textAlign: "left" }}>
                  {" "}
                  <Typography
                    variant="h7"
                    // style={{
                    //   color: "#474747",
                    //   fontSize: "vh" + theme.typography.h5.fontSize + 1,
                    //   fontWeight: "bold",
                    // }}
                  >
                    {curr_val.number}.
                  </Typography>
                  {"  "}
                  {curr_val.step}
                </Typography>
              );
            })
          : ""}
        <Typography variant="h3" style={{ textAlign: "left" }}>
          {" "}
          Ingredient
        </Typography>
        {ingredient
          ? ingredient.map((curr_val, curr_idx, arr) => {
              return (
                <Typography variant="h4">
                  {curr_val.name}
                  {"   "}
                  {curr_val.amount.metric.value}
                  {"  "}
                  {curr_val.amount.metric.unit}
                </Typography>
              );
            })
          : ""}
      </div>
    </ThemeProvider>
  );
};

export default Home;

// Some of them don't have a steps property so see that too
