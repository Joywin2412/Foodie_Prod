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
const customTypo = styled(Typography)(({ theme }) => {
  let now = 2.2 * 13;
  let now2 = 2.5 * 13;
  let now3 = 3 * 13;
  return {
    [theme.breakpoints.up("xs")]: {
      width: now + "vh",
      margin: "auto",
      fontSize: "2.2vh",
    },

    [theme.breakpoints.up("sm")]: {
      width: now + "vh",
      margin: "auto",
      fontSize: "2.2vh",
    },

    [theme.breakpoints.up("md")]: {
      width: now2 + "vh",
      margin: "auto",
      fontSize: "2.5vh",
    },

    [theme.breakpoints.up("lg")]: {
      width: now3 + "vh",
      margin: "auto",
      fontSize: "3vh",
    },
  };
});
export default customTypo;
