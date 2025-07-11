import { darken, Grid, lighten, styled } from '@mui/material';
import {
  DataGridPremium,
  GridRowClassNameParams,
  useGridApiRef,
} from '@mui/x-data-grid-premium';
import React from 'react';
import { LawExecPlain } from '../../../../../../api/search';
import { useAppDispatch, useAppSelector } from '../../../../../../Reducer';
import { setPageState } from '../../../../../../Reducer/StateResults';
import PopoverHook from '../../PopoverHook';
import Dialogs from '../Dialogs';
import getColumns from '../getColumns';
import getRejectStatuses from '../../../../../../api/RejectStatuses/get';
import ResultsToolbar from './ResultsToolbar';

const getBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);

const getHoverBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);

const PREFIX = 'ResultsLawExec';

const classes = {
  root: `${PREFIX}-root`,
  rejected: `${PREFIX}-rejected`,
};

const Root = styled(Grid)(({ theme }) => ({
  [`& .${classes.rejected}`]: {
    backgroundColor: getBackgroundColor(
      theme.palette.error.main,
      theme.palette.mode,
    ),
    '&:hover': {
      backgroundColor: getHoverBackgroundColor(
        theme.palette.error.main,
        theme.palette.mode,
      ),
    },
  },
}));

interface RowClassNameParams {
  params: GridRowClassNameParams<any>;
  debt_reject_statuses: number[];
  law_act_reject_statuses: string[];
}

const getRowClassName = ({
  params,
  debt_reject_statuses,
  law_act_reject_statuses,
}: RowClassNameParams) => {
  const debt_reject = debt_reject_statuses.includes(params.row['Debt.status'])
    ? classes.rejected
    : '';
  const law_act_reject = law_act_reject_statuses.includes(
    params.row['LawAct.StatusDict.name'],
  )
    ? classes.rejected
    : '';
  if (debt_reject && law_act_reject) {
    return classes.rejected;
  } else if (debt_reject) {
    return classes.rejected;
  } else if (law_act_reject) {
    return classes.rejected;
  }
  return '';
};

export default function Results() {
  const [columns] = React.useState(getColumns());
  const dispatch = useAppDispatch();
  const [dialog, setDialog] = React.useState(false);
  const [row, setRow] = React.useState<LawExecPlain>();
  const apiRef = useGridApiRef();
  const rows = useAppSelector((state) => state.Results);
  const stateGrid = useAppSelector((state) => state.StateResults.create);
  const { handlePopoverOpen, handlePopoverClose, ElementPopover } = PopoverHook(
    rows.data,
  );

  const [debt_reject_statuses, setDebtRejectStatuses] = React.useState<
    number[]
  >([]);
  const [law_act_reject_statuses, setLawActRejectStatuses] = React.useState<
    string[]
  >([]);

  const getRejectStatusesCallback = React.useCallback(() => {
    getRejectStatuses().then(
      ({ debt_reject_statuses, law_act_reject_statuses }) => {
        setDebtRejectStatuses(debt_reject_statuses);
        setLawActRejectStatuses(law_act_reject_statuses);
      },
    );
  }, []);

  React.useEffect(() => {
    apiRef.current.restoreState(stateGrid);
    getRejectStatusesCallback();
  }, [apiRef, getRejectStatusesCallback]);
  return (
    <>
      <Root sx={{ width: '100%' }} xs minHeight={0} item>
        <DataGridPremium
          columns={columns}
          rows={rows.data}
          apiRef={apiRef}
          loading={rows.loading}
          onStateChange={() => {
            dispatch(setPageState(apiRef.current.exportState()));
          }}
          disableRowSelectionOnClick
          disableColumnSelector
          getRowClassName={(params) =>
            getRowClassName({
              params,
              debt_reject_statuses,
              law_act_reject_statuses,
            })
          }
          onCellDoubleClick={(params) => {
            setRow(params.row);
            setDialog(true);
          }}
          slots={{
            toolbar: ResultsToolbar,
          }}
          slotProps={{
            cell: {
              onMouseEnter: handlePopoverOpen,
              onMouseLeave: handlePopoverClose,
            },
            toolbar: {
              debt_reject_statuses,
              law_act_reject_statuses,
              onClose: () => {
                getRejectStatusesCallback();
              },
            },
          }}
        />
      </Root>
      <ElementPopover />
      {row && (
        <Dialogs open={dialog} onClose={() => setDialog(false)} row={row} />
      )}
    </>
  );
}
