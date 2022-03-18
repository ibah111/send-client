import { Grid } from "@mui/material";
import { DataGridPro } from "@mui/x-data-grid-pro";
import React from "react";
import getLawAct from "../../../../../api/getLawAct";
import { useAppDispatch, useAppSelector } from "../../../../../Reducer";
import getColumns from "./getColumns";

export default function Table({ handleClose }: { handleClose: () => void }) {
  const columns = getColumns();
  const dispatch = useAppDispatch();
  const [rows, setRows] = React.useState([]);
  const search = useAppSelector((state) => state.Search);
  React.useEffect(() => {
    getLawAct().then((res) => {
      setRows(res);
    });
  }, [search]);
  return (
    <>
      <Grid sx={{ width: 1200, height: 400 }} item>
        <DataGridPro
          columns={columns}
          rows={rows}
          disableSelectionOnClick
          disableColumnSelector
          onCellDoubleClick={(params) => {
            handleClose();
          }}
        />
      </Grid>
    </>
  );
}
