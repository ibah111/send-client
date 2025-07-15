import { Dialog, DialogContent, DialogTitle, Divider } from '@mui/material';
import { DialogProps } from '../../../../../../../utils/interfaces/dialog.props';
import React from 'react';
import { enqueueSnackbar } from 'notistack';
import { DataGridPremium } from '@mui/x-data-grid-premium';

export default function CurrectRejectStatusDialogs({
  open,
  onClose,
}: DialogProps) {
  const callback = React.useCallback(() => {
    console.log('callback');
  }, []);
  React.useEffect(() => {
    if (!open) return;
    callback();
    enqueueSnackbar('Загрузка данных...', {
      variant: 'info',
    });
  }, [open, callback]);
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xl">
      <DialogTitle>Текущие статусы отказа</DialogTitle>
      <Divider />
      <DialogContent>
        <DataGridPremium
          sx={{ height: '400px' }}
          rows={[]}
          columns={[{ field: 'name', headerName: 'Название' }]}
        />
      </DialogContent>
    </Dialog>
  );
}
