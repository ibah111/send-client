import { Grid } from "@mui/material";
import { DataGridPro } from "@mui/x-data-grid-pro";
import React from "react";
import createExec from "../../../../../api/createExec";
import getComment from "../../../../../api/getComment";
import getLawAct from "../../../../../api/getLawAct";
import { useAppDispatch, useAppSelector } from "../../../../../Reducer";
import { setLawActComment } from "../../../../../Reducer/Comment";
import { setId } from "../../../../../Reducer/Send";
import PopoverHook from "../PopoverHook";
import getColumns from "./getColumns";

export default function Table({ handleClose }: { handleClose: () => void }) {
  const columns = getColumns();
  const dispatch = useAppDispatch();
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const search = useAppSelector((state) => state.Search);
  const { handlePopoverOpen, handlePopoverClose, ElementPopover } =
    PopoverHook(rows);

  React.useEffect(() => {
    setLoading(true);
    getLawAct().then((res) => {
      setRows(res);
      setLoading(false);
    });
  }, [search]);
  return (
    <>
      <Grid sx={{ width: "100%", height: 400 }} item>
        <DataGridPro
          columns={columns}
          rows={rows}
          loading={loading}
          componentsProps={{
            cell: {
              onMouseEnter: handlePopoverOpen,
              onMouseLeave: handlePopoverClose,
            },
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
