import { Grid } from '@mui/material';
import React from 'react';
import CourtDocNum from './CourtDocNum';
import ExecutiveTyp from './ExecutiveTyp';
import FsspDate from './FsspDate';
import Id from './Id';
import DebtGuarantor from './DebtGuarantor';
import ExecNumber from './ExecNumber';

export default function Section2() {
  return (
    <>
      <Grid
        container
        item
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <DebtGuarantor />
        <Id />
        <ExecNumber />
        <ExecutiveTyp />
        <CourtDocNum />
        <FsspDate />
      </Grid>
    </>
  );
}
