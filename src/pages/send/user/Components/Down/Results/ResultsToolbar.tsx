import {
  Button,
  DialogTitle,
  DialogContent,
  Dialog,
  Divider,
  Grid,
} from '@mui/material';
import {
  DataGridPremium,
  GridToolbarContainer,
} from '@mui/x-data-grid-premium';
import React from 'react';
import getDict from '../../../../../../api/getDict';
import {
  DEBT_DICT_STATUSES_PARENT_ID,
  LAW_ACT_DICT_STATUSES_PARENT_ID,
} from '../../../../../../utils/consts';
import { Dict } from '@contact/models';
import { DictColumns } from './DictColumns';
import { forkJoin } from 'rxjs';

interface RejectStatus {
  onClose: () => void;
  debt_reject_statuses: number[];
  law_act_reject_statuses: string[];
}

export default function ResultsToolbar({
  onClose,
  debt_reject_statuses,
  law_act_reject_statuses,
}: RejectStatus) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const [debt_statuses_row, setDebtStatusesRow] = React.useState<Dict[]>([]);
  const [law_act_statuses_row, setLawActStatusesRow] = React.useState<Dict[]>(
    [],
  );

  const getTablesData = React.useCallback(() => {
    forkJoin([
      getDict({
        id: DEBT_DICT_STATUSES_PARENT_ID,
        not_in_ids: debt_reject_statuses,
      }),
      getDict({
        id: LAW_ACT_DICT_STATUSES_PARENT_ID,
        not_in_names: law_act_reject_statuses,
      }),
    ]).subscribe(([debt_statuses_row, law_act_statuses_row]) => {
      setDebtStatusesRow(debt_statuses_row);
      setLawActStatusesRow(law_act_statuses_row);
    });
  }, [debt_reject_statuses, law_act_reject_statuses]);

  React.useEffect(() => {
    getTablesData();
  }, [getTablesData]);

  return (
    <>
      <GridToolbarContainer>
        <Button onClick={() => setOpen(true)}>Статусы отказа</Button>
      </GridToolbarContainer>
      {open && (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xl">
          <DialogTitle>Текущие статусы отказа</DialogTitle>
          <Divider />
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                Статусы отказа по долгу
                <DataGridPremium
                  sx={{ height: '400px' }}
                  rows={debt_statuses_row}
                  columns={DictColumns}
                  checkboxSelection
                />
              </Grid>
              <Grid item xs={6}>
                Статусы отказа по закону
                <DataGridPremium
                  checkboxSelection
                  sx={{ height: '400px' }}
                  rows={law_act_statuses_row}
                  columns={DictColumns}
                />
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
