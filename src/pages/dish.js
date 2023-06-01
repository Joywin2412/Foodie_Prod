import React, {
  Component,
  useState,
  useEffect,
  useId,
  useGlobalContext,
} from "react";
import {
  Typography,
  CssBaseline,
  Toolbar,
  AppBar,
  Container,
  Box,
  Card,
} from "@mui/material";
import { Button } from "@mui/material";
import { DinnerDining } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import Navbar from "./navbar.js";
import axios from "axios";

const Home = () => {
  const id = useParams();
  const [loading, setLoading] = useState(0);
  const [instruction, setInstruction] = useState([]);
  const [nutrition, setNutrition] = useState([]);
  const [ingredient, setIngredient] = useState([]);

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

  if (loading) return <h1> Loading... </h1>;
  return (
    <div>
      <CssBaseline>
        <AppBar>
          <Toolbar>
            <DinnerDining style={{ height: "70px", width: "70px" }} />
            <Typography> Foodie </Typography>
            <Navbar />
          </Toolbar>
        </AppBar>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {instruction
          ? instruction.map((curr_val, curr_idx, arr) => {
              return (
                <p>
                  {" "}
                  {curr_val.number}){"  "}
                  {curr_val.step}
                </p>
              );
            })
          : ""}
        <h1> Nutrition</h1>
        {nutrition
          ? nutrition.map((curr_val, curr_idx, arr) => {
              return (
                <p>
                  {" "}
                  {curr_val.title} {curr_val.amount}
                </p>
              );
            })
          : ""}

        <h1> Ingredient</h1>
        {ingredient
          ? ingredient.map((curr_val, curr_idx, arr) => {
              return (
                <p>
                  {curr_val.name}
                  {"   "}
                  {curr_val.amount.metric.value}
                  {"  "}
                  {curr_val.amount.metric.unit}
                </p>
              );
            })
          : ""}
      </CssBaseline>
    </div>
  );
};

export default Home;

// Some of them don't have a steps property so see that too
