import { Button, Dialog, IconButton } from '@mui/material';
import React from 'react';
import TableRowsIcon from '@mui/icons-material/TableRows';

export default function RequisitsButton() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <TableRowsIcon />
      </IconButton>
      {<Dialog open={open}></Dialog>}
    </>
  );
}
