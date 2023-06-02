import {
  Typography,
  CssBaseline,
  Toolbar,
  AppBar,
  Container,
  Box,
  styled,
  createTheme,
  IconButton,
  Card,
  Grid,
  CardMedia,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
// const theme = createTheme();
const CustomCardMedia = styled(CardMedia)(({ theme }) => {
  return {
    objectFit: "cover",
    [theme.breakpoints.up("xs")]: {
      width: "19vh",
    },

    [theme.breakpoints.up("sm")]: {
      width: "24vh",
    },

    [theme.breakpoints.up("md")]: {
      width: "30vh",
    },

    [theme.breakpoints.up("lg")]: {
      width: "40vh",
    },
  };
});
const CustomCard = styled(Card)(({ theme }) => {
  return {
    [theme.breakpoints.up("xs")]: {
      height: "38vh",
      width: "19vh",
    },
    [theme.breakpoints.up("sm")]: {
      height: "42vh",
      width: "24vh",
    },
    [theme.breakpoints.up("md")]: {
      height: "49vh",
      width: "30vh",
    },
    [theme.breakpoints.up("lg")]: {
      height: "49vh",
      width: "40vh",
    },
  };
});
export { CustomCard, CustomCardMedia };
