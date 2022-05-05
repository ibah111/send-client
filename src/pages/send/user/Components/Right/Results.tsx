import { Grid } from "@mui/material";
import { DataGridPro, useGridApiRef } from "@mui/x-data-grid-pro";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../Reducer";
import { setPageState } from "../../../../../Reducer/StateResults";
import PopoverHook from "../PopoverHook";
import getColumns from "./getColumns";
import YesOrNo from "./YesOrNo";

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
        <DataGridPro
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
      <YesOrNo open={dialog} onClose={() => setDialog(false)} row={row} />
    </>
  );
}
