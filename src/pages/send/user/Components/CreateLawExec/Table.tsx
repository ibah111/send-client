import { Grid } from "@mui/material";
import { DataGridPremium, useGridApiRef } from "@mui/x-data-grid-premium";
import React from "react";
import createExec from "../../../../../api/createExec";
import getComment from "../../../../../api/getComment";
import getLawAct from "../../../../../api/getLawAct";
import { useAppDispatch, useAppSelector } from "../../../../../Reducer";
import { setLawActComment } from "../../../../../Reducer/Comment";
import { setId } from "../../../../../Reducer/Send";
import { setCreateState } from "../../../../../Reducer/StateResults";
import PopoverHook from "../PopoverHook";
import getColumns from "./getColumns";

export default function Table({ handleClose }: { handleClose: () => void }) {
  const [columns] = React.useState(getColumns());
  const dispatch = useAppDispatch();
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const search = useAppSelector((state) => state.Search);
  const apiRef = useGridApiRef();
  const stateGrid = useAppSelector((state) => state.StateResults.create);
  const { handlePopoverOpen, handlePopoverClose, ElementPopover } =
    PopoverHook(rows);

  React.useEffect(() => {
    setLoading(true);
    getLawAct().then((res) => {
      setRows(res);
      setLoading(false);
    });
  }, [search]);
  React.useEffect(() => {
    apiRef.current.restoreState(stateGrid);
  }, []);
  return (
    <>
      <Grid sx={{ width: "100%", height: 400 }} item>
        <DataGridPremium
          columns={columns}
          rows={rows}
          loading={loading}
          apiRef={apiRef}
          componentsProps={{
            cell: {
              onMouseEnter: handlePopoverOpen,
              onMouseLeave: handlePopoverClose,
            },
          }}
          onStateChange={() => {
            dispatch(setCreateState(apiRef.current.exportState()));
          }}
          disableSelectionOnClick
          disableColumnSelector
          onCellDoubleClick={(params) => {
            createExec(params.row.id).then((res) => {
              if (res) {
                getComment({ type: "law_act", id: params.row.id }).then(
                  (res) => {
                    dispatch(setLawActComment(res.dsc));
                  }
                );
                dispatch(setId(res));
                handleClose();
              }
            });
          }}
        />
        <ElementPopover />
      </Grid>
    </>
  );
}
