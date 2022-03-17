import { Grid } from "@mui/material";
import { DataGridPro } from "@mui/x-data-grid-pro";
import getColumns from "./getColumns";

export default function Results() {
  const columns = getColumns();
  return (
    <>
      <Grid sx={{ width: 1200, height: 400 }} item>
        <DataGridPro columns={columns} rows={[]} />
      </Grid>
    </>
  );
}
