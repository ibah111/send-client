import { Grid } from '@mui/material';
import React from 'react';
import EntryForceDt from './EntryForceDt';
import ReceiptRecoverDt from './ReceiptRecoverDt';

export default function Section4() {
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
        <EntryForceDt />
        <ReceiptRecoverDt />
      </Grid>
    </>
  );
}
