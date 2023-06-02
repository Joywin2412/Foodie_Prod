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
} from "@mui/material";
import { Menu } from "@mui/icons-material";
// const theme = createTheme();
const customMenu = styled(Menu)(({ theme }) => {
  return {
    [theme.breakpoints.up("xs")]: {
      fontSize: "4vh",
    },

    [theme.breakpoints.up("sm")]: {
      fontSize: "6vh",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "6vh",
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: "6vh",
    },
  };
});
export default customMenu;
