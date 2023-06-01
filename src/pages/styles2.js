import {
  Typography,
  CssBaseline,
  Toolbar,
  AppBar,
  Container,
  Box,
  styled,
  createTheme,
} from "@mui/material";
import { DinnerDining } from "@mui/icons-material";
// const theme = createTheme();
const DinnerIcon = styled(DinnerDining)(({ theme }) => {
  return {
    [theme.breakpoints.up("xs")]: {
      height: "5vh",
      width: "5vh",
    },

    [theme.breakpoints.up("sm")]: {
      height: "7vh",
      width: "7vh",
    },

    [theme.breakpoints.up("md")]: {
      height: "10vh",
      width: "10vh",
    },

    [theme.breakpoints.up("lg")]: {
      height: "8vh",
      width: "8vh",
    },
  };
});
export default DinnerIcon;
