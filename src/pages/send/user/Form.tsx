import { Box, Grid } from '@mui/material';
import Up from './Components/Up';
import Down from './Components/Down';
import { SnackbarProvider } from 'notistack';
import React from 'react';

export default function Form() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          item
          spacing={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <SnackbarProvider maxSnack={11}>
            <Up />
            <Down />
          </SnackbarProvider>
        </Grid>
      </Box>
    </>
  );
}
