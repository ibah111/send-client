import {
  Dialog,
  DialogTitle,
  Divider,
  DialogContent,
  Grid,
} from '@mui/material';
import { DataGridPremium } from '@mui/x-data-grid-premium';
import { enqueueSnackbar } from 'notistack';
import DebtRejectStatusPost from '../../../../../../../api/RejectStatuses/debt-reject-status-post';
import LawActRejectStatusPost from '../../../../../../../api/RejectStatuses/law-act-reject-status-post';
import { DialogProps } from '../../../../../../../utils/interfaces/dialog.props';
import { DictColumns } from '../DictColumns';
import { Dict } from '@contact/models';
import React from 'react';

interface AddRejectStatusDialogProps {
  debt_statuses_row: Dict[];
  law_act_statuses_row: Dict[];
  isLoading: boolean;
}

export default function AddRejectStatusDialog({
  open,
  onClose,
  data,
}: DialogProps<AddRejectStatusDialogProps>) {
  const { debt_statuses_row, law_act_statuses_row, isLoading } = data || {};
  React.useEffect(() => {
    if (!open) return;
    enqueueSnackbar('Загрузка данных...', {
      variant: 'info',
    });
  }, [debt_statuses_row, law_act_statuses_row, isLoading, open]);
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xl">
      <DialogTitle>Добавить статусы отказа</DialogTitle>
      <Divider />
      <DialogContent>
        {isLoading ? (
          <div>Загрузка данных...</div>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              Добавить статусы отказа по долгу
              <DataGridPremium
                sx={{ height: '400px' }}
                rows={debt_statuses_row || []}
                columns={DictColumns}
                onRowDoubleClick={(params) => {
                  console.log('debt params.row', params.row);
                  const reject_id = params.row.code;
                  DebtRejectStatusPost({ reject_id }).then(() => {
                    onClose();
                    enqueueSnackbar('Статус отказа по долгу добавлен', {
                      variant: 'success',
                    });
                  });
                }}
              />
            </Grid>
            <Grid item xs={6}>
              Добавить статусы отказа по ИП
              <DataGridPremium
                sx={{ height: '400px' }}
                rows={law_act_statuses_row || []}
                columns={DictColumns}
                onRowDoubleClick={(params) => {
                  console.log('law_act params.row', params.row);
                  const reject_name = params.row.name;
                  LawActRejectStatusPost({ reject_name }).then(() => {
                    onClose();
                    enqueueSnackbar('Статус отказа по закону добавлен', {
                      variant: 'success',
                    });
                  });
                }}
              />
            </Grid>
          </Grid>
        )}
      </DialogContent>
    </Dialog>
  );
}
