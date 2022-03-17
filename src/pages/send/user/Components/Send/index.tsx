import { Grid } from "@mui/material";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function Send() {
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
        <Section1 />
        <Section2 />
        <Section3 />
      </Grid>
    </>
  );
}
