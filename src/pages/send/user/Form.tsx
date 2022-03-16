import { Grid } from "@mui/material";
import Search from "./Components/Search";
import Send from "./Components/Send";

export default function Form() {
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
        <Search />
        <Send />
      </Grid>
    </>
  );
}
