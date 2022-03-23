import { Grid } from "@mui/material";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useAppDispatch, useAppSelector } from "../../../../../Reducer";
import { setResults } from "../../../../../Reducer/Results";
import { setId } from "../../../../../Reducer/Send";
import getColumns from "./getColumns";

export default function Results() {
  const columns = getColumns();
  const dispatch = useAppDispatch();
  const rows = useAppSelector((state) => state.Results);
  return (
    <>
      <Grid sx={{ width: "100%", height: 400 }} item>
        <DataGridPro
          columns={columns}
          rows={rows}
          disableSelectionOnClick
          disableColumnSelector
          onCellDoubleClick={(params) => {
            dispatch(setId(params.row.id));
            dispatch(setResults([]));
          }}
        />
      </Grid>
    </>
  );
}
