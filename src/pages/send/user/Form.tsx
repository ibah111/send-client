import { Grid } from "@mui/material";
import Left from "./Components/Left";
import Right from "./Components/Right";

export default function Form() {
  return (
    <>
      <Grid
        container
        item
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Left />
        <Right />
      </Grid>
    </>
  );
}
