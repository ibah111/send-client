import { Grid } from "@mui/material";
import Results from "./Results";

export default function Right() {
  return (
    <>
      <Grid
        container
        item
        spacing={1}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Results />
      </Grid>
    </>
  );
}
