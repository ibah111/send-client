import { Grid } from '@mui/material';
import React from 'react';
import getLawExec from '../../../../../../api/getLawExec';
import { useAppDispatch, useAppSelector } from '../../../../../../Reducer';
import { reset, setSend } from '../../../../../../Reducer/Send';
import Contract from './Contract';
import CreateExec from './CreateExec';
import Name from './Name';
import Find from './Find';
import Submit from './Submit';
import search from '../../../../../../api/search';
import {
  setReloadResults,
  setLoadingResults,
  setResults,
} from '../../../../../../Reducer/Results';
import Comments from './Comments';
import DebtCalc from './DebtCalc';
import Documents from './Documents';
import Reset from './Reset';
import { setLawExec } from '../../../../../../Reducer/LawExec';

export default function Search() {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.Send.id);
  const loading = useAppSelector((state) => state.Results.loading);
  const reload = useAppSelector((state) => state.Results.reload);
  const la_id = useAppSelector((state) => state.LawExec?.r_act_id);
  const Click = React.useCallback(() => {
    dispatch(setLoadingResults(true));
    const sub = search().subscribe({
      next: (res) => {
        dispatch(setResults(res));
        dispatch(setLoadingResults(false));
      },
      error: () => {
        setLoadingResults(false);
      },
    });
    return sub.unsubscribe.bind(sub);
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(reset());
    if (id) {
      const sub = getLawExec(id).subscribe((res) => {
        if (res !== null) {
          dispatch(setLawExec(res));
          dispatch(setSend(res));
        }
      });
      return sub.unsubscribe.bind(sub);
    }
  }, [dispatch, id]);
  React.useEffect(() => {
    if (reload) {
      dispatch(setReloadResults(false));
      return Click();
    }
  }, [Click, dispatch, reload]);
  return (
    <>
      <Grid
        item
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Name onEnter={Click} />
        <Contract onEnter={Click} />
        <Find onClick={Click} loading={loading} />
        <CreateExec />
        <Submit />
        <Comments />
        <DebtCalc id={Number(id)} />
        <Documents law_act_id={Number(la_id)} law_exec_id={Number(id)} />
        <Reset />
      </Grid>
    </>
  );
}
