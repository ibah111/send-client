import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme } from "@mui/material";
import { ruRU } from "@mui/x-data-grid-premium";
import { ruRU as ruRUgrid } from "@mui/x-data-grid-pro";
const theme = createTheme(
  {
    typography: {
      fontFamily: "roboto",
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
export default theme;
