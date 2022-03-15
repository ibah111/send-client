import React from "react";
import { Grid, Typography as T } from "@mui/material";
const style = { textAlign: "center" };
export default function NotConnected() {
  return (
    <>
      <Grid
        sx={{ height: "98vh" }}
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid sx={style} item>
          <T variant="h2">Вход выполнен неправильно или у вас нет прав</T>
        </Grid>
      </Grid>
    </>
  );
}
