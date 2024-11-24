import { createTheme } from "@mui/material";
import { teal, purple, red } from "@mui/material/colors";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: teal[500],
      contrastText: "#000",
    },
    secondary: {
      main: purple[400],
      contrastText: "#fff",
    },
    error: {
      main: red.A700,
      contrastText: "#000",
    },

    text: {
      primary: "#a1a1aa",
      secondary: "#737373",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      color: "#7dd3fc",
    },
    h2: {
      color: "#e879f9",
    },
    button: {
      textTransform: "uppercase",
    },
  },
});
