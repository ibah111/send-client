import React from "react";
import ReactDOM from "react-dom";
import App from "./document";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ruRU } from "@mui/material/locale";
import { ruRU as ruRUgrid } from "@mui/x-data-grid-pro";
import '@fontsource/roboto/500.css';
const theme = createTheme({}, ruRU, ruRUgrid);
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
