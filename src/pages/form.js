import React, {
  Component,
  useState,
  useEffect,
  useId,
  useGlobalContext,
} from "react";
import axios from "axios";
import Navbar from "./navbar.js";
import { Link } from "react-router-dom";
import LoadingPage from "./loading.js";
// import { Button } from "@mui/material
import {
  Typography,
  CssBaseline,
  Toolbar,
  AppBar,
  Container,
  Box,
  Input,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  createTheme,
  ThemeProvider,
  TextField,
} from "@mui/material";
import CustomTypo from "./styles4.js";
import { CustomCard, CustomCardMedia } from "./styles5.js";
const Home = () => {
  const [loading, setLoading] = useState(0);
  const [query, setQuery] = useState("");
  const [dishes, setDishes] = useState([]);
  const [dishes2, setDishes2] = useState([]);
  const [dishes3, setDishes3] = useState([]);
  const [form, setForm] = useState(0);
  const [carbs, setCarbs] = useState([19, 100]);
  const [protein, setProtein] = useState([10, 100]);
  const [calories, setCalories] = useState([50, 800]);
  const [fat, setFat] = useState([1, 100]);
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState();
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(1);
    console.log(query);
    if (form === 0) {
      try {
        let s = `${process.env.REACT_APP_URL}/autocomplete?number=10&query=${query}&apiKey=${process.env.REACT_APP_API_KEY}`;
        console.log(process.env.REACT_APP_API_KEY);
        console.log(process.env.NODE_ENV);
        // console.log(process.env.REACT_APP_URL);
        const requestOptions = {
          headers: { "Content-Type": "application/json" },
        };
        const d_now = await axios.get(s, requestOptions);
        console.log(d_now.data);
        setDishes(d_now.data);
        setLoading(0);
      } catch (err) {
        console.log(err);
        setLoading(0);
      }
    } else if (form === 2) {
      try {
        let s = `${process.env.REACT_APP_URL}/findByNutrients?minCarbs=${carbs[0]}&maxCarbs=${carbs[1]}&minProtein=${protein[0]}&maxProtein=${protein[1]}&minCalories=${calories[0]}&maxCalories=${calories[1]}&minFat=${fat[0]}&maxFat=${fat[1]}&number=10&apiKey=${process.env.REACT_APP_API_KEY}`;
        console.log(s);
        const requestOptions = {
          headers: { "Content-Type": "application/json" },
        };
        const d_now = await axios.get(s, requestOptions);
        console.log(d_now.data);
        setDishes2(d_now.data);
        setLoading(0);
      } catch (err) {
        console.log(err);
        setLoading(0);
      }
    } else {
      try {
        let s2 = "";
        for (let str of ingredients) {
          let temp = str;
          temp += ",+";
          s2 += temp;
        }
        console.log("og", s2);
        const p = s2.length;
        s2 = s2.slice(0, p - 2);
        console.log(s2);
        let s = `${process.env.REACT_APP_URL}/findByIngredients?ingredients=${s2}&number=10&apiKey=${process.env.REACT_APP_API_KEY}`;
        const requestOptions = {
          headers: { "Content-Type": "application/json" },
        };
        const d_now = await axios.get(s, requestOptions);
        console.log(d_now.data);
        setDishes3(d_now.data);
        setLoading(0);
      } catch (err) {
        console.log(err);
        setLoading(0);
      }
    }
  };
  // theme
  let theme = createTheme();
  theme = createTheme({
    typography: {
      h2: {
        color: "#ffffff",
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
          fontSize: "3vh",
        },

        [theme.breakpoints.up("md")]: {
          fontSize: "3vh",
        },

        [theme.breakpoints.up("lg")]: {
          fontSize: "3vh",
        },
        // fontWeight: 500,
      },

      h4: {
        color: "#000000",
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
          fontSize: "6vh",
        },

        [theme.breakpoints.up("lg")]: {
          fontSize: "4vh",
        },
        fontWeight: 500,
      },
      h6: {
        color: "#000000",
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
          fontSize: "2.2vh",
        },

        [theme.breakpoints.up("sm")]: {
          fontSize: "2.2vh",
        },

        [theme.breakpoints.up("md")]: {
          fontSize: "2.5vh",
        },

        [theme.breakpoints.up("lg")]: {
          fontSize: "2.8vh",
        },
        fontWeight: 500,
      },
      h7: {
        textDecoration: "none",
        color: "#051922",
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
        // textDecoration: "none",

        [theme.breakpoints.up("xs")]: {
          fontSize: "2.7vh",
        },

        [theme.breakpoints.up("sm")]: {
          fontSize: "2.7vh",
        },

        [theme.breakpoints.up("md")]: {
          fontSize: "22px",
        },

        [theme.breakpoints.up("lg")]: {
          fontSize: "22px",
        },
        fontWeight: 600,
      },
    },
  });
  const color1 = "#FFE537";
  const color2 = "#4855FE";
  if (loading) return <LoadingPage></LoadingPage>;
  return (
    <ThemeProvider theme={theme}>
      <form style={{ marginTop: "2rem" }}>
        <Typography variant="h4">
          Enter the dish you wish to search for
        </Typography>
        <br></br>
        {form === 2 ? (
          <div>
            <Grid
              sx={{
                width: "75%",
                // margin: "auto",
                margin: "0.5rem auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <CustomTypo variant="h6"> Carbohydrates</CustomTypo>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6"> Minimum</Typography>
                <Input
                  style={{ fontSize: "17px", margin: "auto 0.5rem" }}
                  type="text"
                  onChange={(e) => {
                    let calories2 = calories;
                    calories2[0] = e.target.value;
                    setCalories(calories2);
                  }}
                ></Input>
                <Typography variant="h6"> Maximum</Typography>
                <Input
                  style={{ fontSize: "17px", margin: "auto 0.5rem" }}
                  type="text"
                  onChange={(e) => {
                    let calories2 = calories;
                    calories2[1] = e.target.value;
                    setCalories(calories2);
                  }}
                ></Input>
              </Grid>
            </Grid>
            <Grid
              sx={{
                width: "75%",
                margin: "0.5rem auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <CustomTypo variant="h6"> Protein</CustomTypo>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6"> Minimum</Typography>
                <Input
                  style={{ fontSize: "17px", margin: "auto 0.5rem" }}
                  type="text"
                  onChange={(e) => {
                    let calories2 = protein;
                    calories2[0] = e.target.value;
                    setProtein(calories2);
                  }}
                ></Input>
                <Typography variant="h6"> Maximum</Typography>
                <Input
                  style={{ fontSize: "17px", margin: "auto 0.5rem" }}
                  type="text"
                  onChange={(e) => {
                    let calories2 = protein;
                    calories2[1] = e.target.value;
                    setProtein(calories2);
                  }}
                ></Input>
              </Grid>
            </Grid>
            <Grid
              sx={{
                width: "75%",
                margin: "0.5rem auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <CustomTypo variant="h6"> Calories</CustomTypo>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6"> Minimum</Typography>
                <Input
                  style={{ fontSize: "17px", margin: "auto 0.5rem" }}
                  type="text"
                  onChange={(e) => {
                    let calories2 = carbs;
                    calories2[0] = e.target.value;
                    setCarbs(calories2);
                  }}
                ></Input>
                <Typography variant="h6"> Maximum</Typography>
                <Input
                  style={{ fontSize: "17px", margin: "auto 0.5rem" }}
                  type="text"
                  onChange={(e) => {
                    let calories2 = carbs;
                    calories2[1] = e.target.value;
                    setCarbs(calories2);
                  }}
                ></Input>
              </Grid>
            </Grid>
            <Grid
              sx={{
                width: "75%",
                margin: "0.5rem auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <CustomTypo variant="h6"> Fat </CustomTypo>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6"> Minimum</Typography>
                <Input
                  type="text"
                  style={{ fontSize: "17px", margin: "auto 0.5rem" }}
                  onChange={(e) => {
                    let calories2 = fat;
                    calories2[0] = e.target.value;
                    setFat(calories2);
                  }}
                ></Input>
                <Typography variant="h6"> Maximum</Typography>
                <Input
                  type="text"
                  style={{ fontSize: "17px", margin: "auto 0.5rem" }}
                  onChange={(e) => {
                    let calories2 = fat;
                    calories2[1] = e.target.value;
                    setFat(calories2);
                  }}
                ></Input>
              </Grid>
            </Grid>
          </div>
        ) : form === 1 ? (
          <div style={{ display: "inline-block" }}>
            {ingredients.map((curr_val, curr_idx, arr) => {
              return (
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span>
                    <Typography
                      variant="h6"
                      style={{ display: "inline-block" }}
                    >
                      {" "}
                      {curr_val}
                    </Typography>
                    <Button
                      style={{
                        display: "inline-block",
                        backgroundColor: "#F44336",
                        color: "white",
                        borderRadius: 40,
                        fontWeight: 600,
                        margin: "0.3rem",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        let ingredients2 = [...ingredients];
                        ingredients2 = ingredients2.filter((curr_val2) => {
                          return curr_val2 !== curr_val;
                        });
                        setIngredients(ingredients2);
                      }}
                    >
                      Remove
                    </Button>{" "}
                  </span>
                </Grid>
              );
            })}
            <Input
              style={{
                fontSize: "17px",
                margin: "0.3rem",
              }}
              type="text"
              onChange={(e) => setIngredient(e.target.value)}
            ></Input>
            <Button
              style={{
                display: "inline-block",
                backgroundColor: "#14A44D",
                color: "white",
                borderRadius: 40,
                fontWeight: 600,
                margin: "0.3rem",
              }}
              onClick={(e) => {
                // console.log(typeof ingredient);
                e.preventDefault();
                if (typeof ingredient === "undefined") return;

                let value = ingredients.findIndex((curr_val) => {
                  return curr_val === ingredient;
                });
                console.log(value);
                if (value === -1) setIngredients([...ingredients, ingredient]);
                // console.log();
              }}
            >
              ADD{" "}
            </Button>
          </div>
        ) : (
          <Input
            style={{
              fontSize: "17px",
              marginRight: "1rem",
              marginBottom: "1rem",
            }}
            type="text"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}
          ></Input>
        )}
        <Button
          color="primary"
          onClick={(e) => submitHandler(e)}
          style={{
            backgroundColor: "#FFE537",
            borderRadius: 40,
            color: "white",
            fontWeight: 600,
            margin: "0.3rem",
          }}
        >
          {" "}
          Submit
        </Button>
        <br></br>
        <br></br>
        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            variant="h2"
            onClick={(e) => {
              e.preventDefault();
              setForm(0);
            }}
            style={{
              display: "inline-block",
              backgroundColor: form === 0 ? color1 : color2,
              borderRadius: 25,
              padding: "0.3rem",
              cursor: "pointer",
            }}
          >
            {" "}
            Recipe{" "}
          </Typography>
          <Typography
            variant="h2"
            onClick={(e) => {
              e.preventDefault();
              setForm(1);
            }}
            style={{
              display: "inline-block",
              backgroundColor: form === 1 ? color1 : color2,
              borderRadius: 25,
              padding: "0.3rem",
              cursor: "pointer",
            }}
          >
            {" "}
            Ingredients{" "}
          </Typography>
          <Typography
            variant="h2"
            onClick={(e) => {
              e.preventDefault();
              setForm(2);
            }}
            style={{
              display: "inline-block",
              backgroundColor: form === 2 ? color1 : color2,
              borderRadius: 25,
              padding: "0.3rem",
              cursor: "pointer",
            }}
          >
            {" "}
            Nutrients{" "}
          </Typography>
        </Grid>
        <br></br>
        <br></br>

        <br></br>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {form === 0
            ? typeof dishes === "object"
              ? dishes.map((curr_val, curr_idx, arr) => {
                  console.log(form);
                  // console.log(curr_val);
                  const finalSentence = curr_val.title.replace(
                    /(^\w{1})|(\s+\w{1})/g,
                    (letter) => letter.toUpperCase()
                  );
                  // let s= `https://spoonacular.com/recipeImages/${curr_val.id}-312x231.{curr_val.imageType}`;
                  // words.join(" ");
                  return (
                    <Grid item>
                      <CustomCard variant="outlined">
                        <CustomCardMedia
                          component="img"
                          image={`https://spoonacular.com/recipeImages/${curr_val.id}-312x231.${curr_val.imageType}`}
                          alt="Recipe"
                        />

                        <CardContent sx={{ border: "0" }}>
                          <Link
                            to={`/dish/${curr_val.id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography variant="h7">
                              {finalSentence}
                            </Typography>
                          </Link>
                        </CardContent>
                      </CustomCard>
                    </Grid>
                  );
                })
              : ""
            : ""}
        </Grid>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {form === 2
            ? typeof dishes2 === "object"
              ? dishes2.map((curr_val, curr_idx, arr) => {
                  // console.log(form);
                  const finalSentence = curr_val.title.replace(
                    /(^\w{1})|(\s+\w{1})/g,
                    (letter) => letter.toUpperCase()
                  );
                  return (
                    <Grid item>
                      <CustomCard variant="outlined">
                        <CustomCardMedia
                          component="img"
                          image={`https://spoonacular.com/recipeImages/${curr_val.id}-312x231.${curr_val.imageType}`}
                          alt="Recipe"
                        />

                        <CardContent sx={{ border: "0" }}>
                          <Link
                            to={`/dish/${curr_val.id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography variant="h7">
                              {finalSentence}
                            </Typography>
                          </Link>
                        </CardContent>
                      </CustomCard>
                    </Grid>
                  );
                })
              : ""
            : ""}
        </Grid>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
          disableEqualOverflow
        >
          {form === 1
            ? dishes3
              ? dishes3.map((curr_val, curr_idx, arr) => {
                  console.log({ curr_val });
                  const finalSentence = curr_val.title.replace(
                    /(^\w{1})|(\s+\w{1})/g,
                    (letter) => letter.toUpperCase()
                  );
                  return (
                    <Grid item>
                      <CustomCard variant="outlined">
                        <CustomCardMedia
                          component="img"
                          image={`https://spoonacular.com/recipeImages/${curr_val.id}-312x231.${curr_val.imageType}`}
                          alt="Recipe"
                        />

                        <CardContent sx={{ border: "0" }}>
                          <Link
                            to={`/dish/${curr_val.id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography variant="h7">
                              {finalSentence}
                            </Typography>
                          </Link>
                        </CardContent>
                      </CustomCard>
                    </Grid>
                  );
                })
              : ""
            : ""}
        </Grid>
      </form>
    </ThemeProvider>
  );
};

export default Home;

// make your form2 dynamic
