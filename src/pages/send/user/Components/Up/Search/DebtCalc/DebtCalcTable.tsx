import { DebtCalc, Dict } from '@contact/models';
import { Box } from '@mui/material';
import {
  DataGridPremium,
  GridColDef,
  GridValueGetterParams,
  useGridApiRef,
} from '@mui/x-data-grid-premium';
import { t } from 'i18next';
import React from 'react';
import getDebtCalc from '../../../../../../../api/getDebtCalc';
import { useAppDispatch, useAppSelector } from '../../../../../../../Reducer';
import { setDebtCalcState } from '../../../../../../../Reducer/StateResults';

const getColumns = () => {
  const columns: GridColDef<DebtCalc>[] = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'sum',
      type: 'number',
      headerName: t('form.debt_calc.table.sum'),
      valueGetter: (params) => {
        return params.row.sum;
      },
    },
    {
      field: 'dt',
      type: 'date',
      headerName: t('form.debt_calc.table.dt'),
      valueGetter: (params) => new Date(params.value),
      aggregable: false,
    },
    {
      field: 'calc_date',
      type: 'date',
      headerName: t('form.debt_calc.table.calc_date'),
      valueGetter: (params) => new Date(params.value),
      aggregable: false,
    },

    {
      field: 'PurposeDict',
      headerName: t('form.debt_calc.table.purpose'),
      valueGetter: (params: GridValueGetterParams<DebtCalc, Dict>) =>
        params.value?.name,
    },
    { field: 'dsc', headerName: t('form.debt_calc.table.dsc') },
  ];
  return columns.map<GridColDef<DebtCalc>>((item) => ({
    width: 150,
    headerAlign: 'center',
    align: 'center',
    ...item,
  }));
};
interface DebtCalcTableProps {
  id: number;
}
export default function DebtCalcTable({ id }: DebtCalcTableProps) {
  const [columns] = React.useState(getColumns());
  const stateGrid = useAppSelector((state) => state.StateResults.debt_calc);
  const apiRef = useGridApiRef();
  const dispatch = useAppDispatch();
  const [rows, setRows] = React.useState<DebtCalc[]>([]);
  React.useEffect(() => {
    const sub = getDebtCalc(id).subscribe(setRows);
    apiRef.current.restoreState(stateGrid);
    return sub.unsubscribe.bind(sub);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiRef, id]);
  return (
    <>
      <Box sx={{ width: '100%', height: 400 }}>
        <DataGridPremium
          initialState={{
            aggregation: {
              model: {
                sum: 'sum',
              },
            },
          }}
          apiRef={apiRef}
          onStateChange={() => {
            dispatch(setDebtCalcState(apiRef.current.exportState()));
          }}
          columns={columns}
          rows={rows}
        />
      </Box>
    </>
  );
}
