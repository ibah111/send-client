import { Grid } from '@mui/material';
import { DataGridPremium, useGridApiRef } from '@mui/x-data-grid-premium';
import React from 'react';
import createExec from '../../../../../api/createExec';
import getComment from '../../../../../api/getComment';
import getLawAct, { LawActPlain } from '../../../../../api/getLawAct';
import { useAppDispatch, useAppSelector } from '../../../../../Reducer';
import { ResetComment, setLawActComment } from '../../../../../Reducer/Comment';
import { setId } from '../../../../../Reducer/Send';
import { setCreateState } from '../../../../../Reducer/StateResults';
import PopoverHook from '../PopoverHook';
import Canceled from './Canceled';
import getColumns from './getColumns';

export default function Table({ handleClose }: { handleClose: () => void }) {
  const [columns] = React.useState(getColumns());
  const dispatch = useAppDispatch();
  const [rows, setRows] = React.useState<LawActPlain[]>([]);
  const [row, setRow] = React.useState<LawActPlain>();
  const [loading, setLoading] = React.useState(false);
  const [openCanceled, setOpenCanceled] = React.useState(false);
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
      <Grid sx={{ width: '100%', height: 400 }} item>
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
            if (params.row['Debt.status'])
              if (params.row['Debt.status'] !== 7) {
                createExec(params.row.id).then((res) => {
                  if (res) {
                    dispatch(ResetComment());
                    getComment({ type: 'law_act', id: params.row.id }).then(
                      (res) => {
                        dispatch(setLawActComment(res.dsc));
                      },
                    );
                    dispatch(setId(res));
                    handleClose();
                  }
                });
              } else {
                setRow(params.row);
                setOpenCanceled(true);
              }
          }}
        />
        <ElementPopover />
        {row && (
          <Canceled
            onClose={() => setOpenCanceled(false)}
            open={openCanceled}
            row={row}
            next={() => {
              handleClose();
            }}
          />
        )}
      </Grid>
    </>
  );
}
