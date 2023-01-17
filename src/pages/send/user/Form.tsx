import { Box, Grid } from '@mui/material';
import Up from './Components/Up';
import Down from './Components/Down';
import React from 'react';

export default function Form() {
  return (
    <>
      <Box sx={{ flexGrow: 1, height: '90vh' }}>
        <Grid
          height={'100%'}
          container
          item
          spacing={1}
          direction="column"
          alignItems="center"
        >
          <Up />
          <Down />
        </Grid>
      </Box>
    </>
  );
}
