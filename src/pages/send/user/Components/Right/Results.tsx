import { Grid } from "@mui/material";
import { DataGridPro } from "@mui/x-data-grid-pro";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../Reducer";
import { setResults } from "../../../../../Reducer/Results";
import { setId } from "../../../../../Reducer/Send";
import getColumns from "./getColumns";
import YesOrNo from "./YesOrNo";

export default function Results() {
  const columns = getColumns();
  const dispatch = useAppDispatch();
  const [dialog, setDialog] = React.useState(false);
  const [row, setRow] = React.useState<any>({});
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
            if (!params.row.fssp_doc_num) {
              dispatch(setId(params.row.id));
              dispatch(setResults([]));
            } else {
              setRow(params.row);
              setDialog(true);
            }
          }}
        />
      </Grid>
      <YesOrNo open={dialog} onClose={() => setDialog(false)} row={row} />
    </>
  );
}
