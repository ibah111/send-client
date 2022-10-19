import { Typography } from '@mui/material';
import React from 'react';
import getVersion from '../utils/getVersion';
interface VersionProps {
  minimize?: boolean;
}
export default function Version({ minimize }: VersionProps) {
  return (
    <>
      <Typography>
        {minimize ? 'Версия' : 'Вы работает на версии клиента "ПОДАЧА"'} -{' '}
        {getVersion()}
      </Typography>
    </>
  );
}
