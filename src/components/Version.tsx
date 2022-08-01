import { Typography } from '@mui/material';
import React from 'react';
import getVersion from '../utils/getVersion';

export default function Version({ minimize }: any) {
  return (
    <>
      <Typography>
        {minimize ? 'Версия' : 'Вы работает на версии клиента "ПОДАЧА"'} -{' '}
        {getVersion()}
      </Typography>
    </>
  );
}
