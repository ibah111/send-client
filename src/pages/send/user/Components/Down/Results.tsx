import { Grid } from "@mui/material";
import { DataGridPremium, useGridApiRef } from "@mui/x-data-grid-premium";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../Reducer";
import { setPageState } from "../../../../../Reducer/StateResults";
import PopoverHook from "../PopoverHook";
import Dialogs from "./Dialogs";
import getColumns from "./getColumns";

export default function Results() {
  const [columns] = React.useState(getColumns());
  const dispatch = useAppDispatch();
  const [dialog, setDialog] = React.useState(false);
  const [row, setRow] = React.useState<any>({});
  const apiRef = useGridApiRef();
  const rows = useAppSelector((state) => state.Results);
  const stateGrid = useAppSelector((state) => state.StateResults.create);
  const { handlePopoverOpen, handlePopoverClose, ElementPopover } = PopoverHook(
    rows.data
  );
  React.useEffect(() => {
    apiRef.current.restoreState(stateGrid);
  }, []);
  return (
    <>
      <Grid sx={{ width: "100%", height: 400 }} item>
        <DataGridPremium
          columns={columns}
          rows={rows.data}
          apiRef={apiRef}
          loading={rows.loading}
          onStateChange={() => {
            dispatch(setPageState(apiRef.current.exportState()));
          }}
          componentsProps={{
            cell: {
              onMouseEnter: handlePopoverOpen,
              onMouseLeave: handlePopoverClose,
            },
          }}
          disableSelectionOnClick
          disableColumnSelector
          onCellDoubleClick={(params) => {
            setRow(params.row);
            setDialog(true);
          }}
        />
      </Grid>
      <ElementPopover />
      <Dialogs open={dialog} onClose={() => setDialog(false)} row={row} />
    </>
  );
}
