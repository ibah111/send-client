import { Box, Grid } from "@mui/material";
import Left from "./Components/Left";
import Right from "./Components/Right";

export default function Form() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          item
          spacing={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Left />
          <Right />
        </Grid>
      </Box>
    </>
  );
}
