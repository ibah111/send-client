import { Grid } from "@mui/material";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useAppDispatch, useAppSelector } from "../../../../../Reducer";
import { setResults } from "../../../../../Reducer/Results";
import getColumns from "./getColumns";

export default function Results() {
  const columns = getColumns();
  const dispatch = useAppDispatch();
  const rows = useAppSelector((state) => state.Results);
  return (
    <>
      <Grid sx={{ width: 1200, height: 400 }} item>
        <DataGridPro
          columns={columns}
          rows={rows}
          disableSelectionOnClick
          disableColumnSelector
          onCellDoubleClick={(params) => {
            
            dispatch(setResults([]));
          }}
        />
      </Grid>
    </>
  );
}
