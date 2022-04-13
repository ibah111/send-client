import React from "react";
import ReactDOM from "react-dom/client";
import App from "./document";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ruRU } from "@mui/material/locale";
import { ruRU as ruRUgrid } from "@mui/x-data-grid-pro";
import "@fontsource/roboto/500.css";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const theme = createTheme(
  {
    typography: {
      fontSize: 13,
    },
    components: {
      // Name of the component
      MuiTextField: {
        defaultProps: { size: "small" },
      },
      MuiAutocomplete: {
        defaultProps: { size: "small" },
      },
      MuiFormControl: {
        defaultProps: { size: "small" },
      },
      //@ts-ignore
      MuiDataGrid: {
        defaultProps: { density: "compact" },
      },
    },
  },
  ruRU,
  ruRUgrid
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
