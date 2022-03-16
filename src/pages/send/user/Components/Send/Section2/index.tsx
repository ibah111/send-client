import { Grid } from "@mui/material";
import CourtDocNum from "./CourtDocNum";
import ExecutiveTyp from "./ExecutiveTyp";

export default function Section2() {
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
        <ExecutiveTyp />
        <CourtDocNum />
      </Grid>
    </>
  );
}
