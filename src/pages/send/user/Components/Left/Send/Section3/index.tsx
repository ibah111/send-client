import { Grid } from "@mui/material";
import CourtDate from "./CourtDate";
import DeliveryTyp from "./DeliveryTyp";

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
        <CourtDate />
        <DeliveryTyp />
      </Grid>
    </>
  );
}
