import { Portfolio } from '@contact/models';
import { loadingButtonClasses } from '@mui/lab';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  Box,
} from '@mui/material';
import {
  DataGridPremium,
  GridColDef,
  GridPaginationModel,
  useGridApiRef,
} from '@mui/x-data-grid-premium';
import React from 'react';
import getAllPortfolio from '../../../../../../../../../../../api/PortfoliosToRequisites/getAllPortfolio';
import CustomPagination from '../../../../../../../../../../../components/CustomPagination';
import moment from 'moment';

interface DialogProps {
  id: number;
  open: boolean;
  onClose: VoidFunction;
}

export default function SearchAndAddDialog({ open, onClose }: DialogProps) {
  let portfolioArray: Portfolio[] = [];
  const columns = PortfolioColumns();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [rows, setRows] = React.useState<Portfolio[]>([]);
  const [nameValue, setNameValue] = React.useState<string>('');
  const [rowCount, setRowCount] = React.useState<number>(0);
  const [paginationModel, setPaginationModel] =
    React.useState<GridPaginationModel>({
      page: 0,
      pageSize: 25,
    });

  const request = React.useCallback(() => {
    setLoading(true);
    getAllPortfolio({
      name: nameValue,
      paginationModel: paginationModel,
    }).subscribe(({ count, rows }) => {
      setRowCount(count);
      setRows(rows);
      setLoading(false);
    });
  }, [nameValue, paginationModel]);
  const apiRef = useGridApiRef();
  React.useEffect(() => {
    request();
  }, [request]);
  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
        <DialogTitle>
          <Grid item container xs spacing={1}>
            <Grid item xs={4}>
              Поиск портфеля
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                value={nameValue}
                onChange={(event) => {
                  const text = event.target.value as string;
                  setNameValue(text);
                }}
              />
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
              m: 'auto',
            }}
          >
            <Grid sx={{ width: '100%', height: 400 }} item>
              {/*
               *
               */}
              <DataGridPremium
                rowCount={rowCount}
                apiRef={apiRef}
                loading={loading}
                columns={columns}
                rows={rows}
                checkboxSelection
                disableRowSelectionOnClick
                onPaginationModelChange={({ page, pageSize }) =>
                  setPaginationModel({
                    page,
                    pageSize,
                  })
                }
                slots={{
                  pagination: CustomPagination,
                }}
              />
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
}

function PortfolioColumns() {
  const columns: GridColDef<Portfolio>[] = [
    {
      width: 100,
      field: 'id',
      headerName: 'ID',
    },
    {
      field: 'name',
      headerName: 'Имя портфеля',
    },
    {
      headerName: 'Дата подписания',
      field: 'sign_date',
      type: 'date',
      valueGetter(params) {
        return moment(params.row.sign_date).toDate();
      },
    },
    {
      field: 'Bank',
      type: 'string',
      headerName: 'Банк',
      valueGetter(params) {
        const bank_id = `(${params.row.Bank?.id})` || '';
        const bank_name = `${params.row.Bank?.name}` || '';
        const bank_full_name = `${params.row.Bank?.full_name}` || '';
        const bank_address = `${params.row.Bank?.bank_address}` || '';
        return `${bank_id} ${bank_name} // ${bank_full_name} // ${bank_address}`;
      },
    },
  ];
  return columns.map((items) => ({
    width: 200,
    ...items,
  }));
}
