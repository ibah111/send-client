import { Grid } from "@mui/material";
import CourtDocNum from "./CourtDocNum";
import ExecutiveTyp from "./ExecutiveTyp";
import FsspDate from "./FsspDate";
import Id from "./Id";

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
        <Id />
        <ExecutiveTyp />
        <CourtDocNum />
        <FsspDate />
      </Grid>
    </>
  );
}
