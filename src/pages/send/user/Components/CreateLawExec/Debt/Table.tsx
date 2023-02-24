import { Grid } from '@mui/material';
import { DataGridPremium, useGridApiRef } from '@mui/x-data-grid-premium';
import React from 'react';
import getDebt from '../../../../../../api/getDebt';
import { LawActPlain } from '../../../../../../api/getLawAct';
import updateDebt from '../../../../../../api/updateDebt';
import { useAppDispatch, useAppSelector } from '../../../../../../Reducer';
import { ReloadResults } from '../../../../../../Reducer/Results';
import { setDebtState } from '../../../../../../Reducer/StateResults';
import getColumns from './getColumns';

export default function Table({
  row,
  handleClose,
}: {
  row: LawActPlain;
  handleClose: () => void;
}) {
  const [columns] = React.useState(getColumns());
  const dispatch = useAppDispatch();
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const search = useAppSelector((state) => state.Search);
  const apiRef = useGridApiRef();
  const stateGrid = useAppSelector((state) => state.StateResults.debt);

  React.useEffect(() => {
    setLoading(true);
    getDebt().subscribe((res) => {
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
          onStateChange={() => {
            dispatch(setDebtState(apiRef.current.exportState()));
          }}
          disableSelectionOnClick
          disableColumnSelector
          onCellDoubleClick={(params) => {
            updateDebt({ law_act_id: row.id }, params.row.id).subscribe(() => {
              dispatch(ReloadResults());
              handleClose();
            });
          }}
        />
      </Grid>
    </>
  );
}
