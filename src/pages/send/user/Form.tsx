import { Box, Grid } from "@mui/material";
import Left from "./Components/Left";
import Right from "./Components/Right";
import { SnackbarProvider } from "notistack";
import React from "react";

export default function Form() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          item
          spacing={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <SnackbarProvider maxSnack={11}>
            <Left />
            <Right />
          </SnackbarProvider>
        </Grid>
      </Box>
    </>
  );
}
