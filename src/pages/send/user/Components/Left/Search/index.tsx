import { Grid } from "@mui/material";
import Contract from "./Contract";
import CreateExec from "./CreateExec";
import Name from "./Name";
import Submit from "./Submit";

export default function Search() {
  return (
    <>
      <Grid
        item
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Name />
        <Contract />
        <Submit />
        <CreateExec />
      </Grid>
    </>
  );
}
