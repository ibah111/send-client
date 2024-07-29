import { Portfolio } from '@contact/models';
import { loadingButtonClasses } from '@mui/lab';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
} from '@mui/material';
import { DataGridPremium, GridColDef } from '@mui/x-data-grid-premium';
import React from 'react';
import getAllPortfolio from '../../../../../../../../../../../api/PortfoliosToRequisites/getAllPortfolio';
import CustomPagination from '../../../../../../../../../../../components/CustomPagination';

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
  const [value, setValue] = React.useState<string>('');
  const request = React.useCallback(() => {
    getAllPortfolio().subscribe((result) => {
      setRows(result);
    });
  }, []);
  React.useEffect(() => {}, []);
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>
          <TextField
            value={value}
            onChange={(event) => {
              const text = event.target.value as string;
              setValue(text);
            }}
          />
        </DialogTitle>
        <DialogContent>
          <Grid
            item
            xs
            sx={{
              height: 400,
            }}
          >
            <DataGridPremium
              loading={loading}
              columns={columns}
              rows={rows}
              autoHeight
              checkboxSelection
              disableRowSelectionOnClick
              paginationMode="server"
              slots={{
                pagination: CustomPagination,
              }}
            />
          </Grid>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
}

function PortfolioColumns() {
  const columns: GridColDef<Portfolio>[] = [];
  return columns.map((items) => ({
    ...items,
  }));
}
