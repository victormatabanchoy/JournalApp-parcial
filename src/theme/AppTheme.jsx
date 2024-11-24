import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { customTheme } from "./purpleTheme";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ customTheme }>

        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}
