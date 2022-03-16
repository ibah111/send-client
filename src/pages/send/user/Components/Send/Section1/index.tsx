import { Grid } from "@mui/material";
import LoadDt from "./LoadDt";
import TotalSum from "./TotalSum";

export default function Section1() {
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
        <TotalSum />
        <LoadDt />
      </Grid>
    </>
  );
}
