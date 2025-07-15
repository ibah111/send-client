import { Button } from '@mui/material';
import { GridToolbarContainer } from '@mui/x-data-grid-premium';
import React from 'react';
import getDict from '../../../../../../api/getDict';
import {
  DEBT_DICT_STATUSES_PARENT_ID,
  LAW_ACT_DICT_STATUSES_PARENT_ID,
} from '../../../../../../utils/consts';
import { Dict } from '@contact/models';
import { forkJoin } from 'rxjs';
import AddRejectStatusDialog from './ResultsDialogs/AddRejectStatusDialog';
import CurrectRejectStatusDialogs from './ResultsDialogs/CurrectRejectStatusDialogs';

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
  const [isLoading, setIsLoading] = React.useState(false);
  const [debt_statuses_row, setDebtStatusesRow] = React.useState<Dict[]>([]);
  const [law_act_statuses_row, setLawActStatusesRow] = React.useState<Dict[]>(
    [],
  );

  const getTablesData = React.useCallback(() => {
    setIsLoading(true);
    forkJoin([
      getDict({
        id: DEBT_DICT_STATUSES_PARENT_ID,
        not_in_ids: debt_reject_statuses,
      }),
      getDict({
        id: LAW_ACT_DICT_STATUSES_PARENT_ID,
        not_in_names: law_act_reject_statuses,
      }),
    ]).subscribe({
      next: ([debt_statuses_row, law_act_statuses_row]) => {
        setDebtStatusesRow(debt_statuses_row);
        setLawActStatusesRow(law_act_statuses_row);
        setIsLoading(false);
      },
      error: () => {
        setIsLoading(false);
      },
    });
  }, [debt_reject_statuses, law_act_reject_statuses]);

  const handleOpen = () => {
    setOpen(true);
    getTablesData();
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <>
      <GridToolbarContainer>
        <Button variant="contained" color="success" onClick={handleOpen}>
          Добавить статусы отказа
        </Button>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Текущие статусы отказа
        </Button>
      </GridToolbarContainer>

      {open && <CurrectRejectStatusDialogs open={open} onClose={handleClose} />}
    </>
  );
}
