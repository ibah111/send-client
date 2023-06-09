import { Box, Grid } from '@mui/material';
import Up from './Components/Up';
import Down from './Components/Down';
import React from 'react';

export default function Form() {
  return (
    <>
      <Box sx={{ height: '90vh' }}>
        <Grid
          height={'100%'}
          container
          maxWidth="100vw"
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
