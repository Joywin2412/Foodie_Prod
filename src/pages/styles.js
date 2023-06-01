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

const customTheme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#4855fe",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#f3e5f5",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    custom: {
      light: "#ffa726",
      main: "#f57c00",
      dark: "#ef6c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
const CustomAppBar = styled(AppBar)(({ theme }) => {
  //   const { mode, toggleMode } = useContext(ThemeContext);

  return {
    // backgroundColor:
    //   mode === "light"
    //     ? theme.palette.secondary[300]
    //     : darkTheme.palette.primary[600],

    backgroundColor: customTheme.palette.primary.main,

    color: "#ffffff",
    // color:
    //   mode === "light"
    //     ? theme.palette.secondary[700]
    //     : darkTheme.palette.secondary.main,

    // [theme.breakpoints.up("xs")]: {
    //   height: "5vh",
    // },

    // [theme.breakpoints.up("sm")]: {
    //   height: "7vh",
    // },

    // [theme.breakpoints.up("md")]: {
    //   height: "8vh",
    // },

    // [theme.breakpoints.up("lg")]: {
    //   height: "10vh",
    // },

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});
export default CustomAppBar;
