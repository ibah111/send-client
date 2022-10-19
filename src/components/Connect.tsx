import React from 'react';
import NotConnected from './NotConnected';
import PropTypes from 'prop-types';
import { io } from 'socket.io-client';
import server from '../utils/server';
import getVersion from '../utils/getVersion';
import Version from './Version';
import { Grid } from '@mui/material';
const connect = (callback: (value: boolean) => void) => {
  const socket = io(server());
  socket.on('connect', () => {
    socket.emit('version', getVersion());
    callback(true);
  });
  socket.on('new_version', () => {
    document.location.reload();
  });
  socket.on('disconnect', () => {
    callback(false);
  });
};
interface ConnectProps {
  children: React.ReactNode;
}
export default function Connect({ children }: ConnectProps) {
  const [connected, setConnected] = React.useState(false);
  React.useEffect(() => {
    connect(setConnected);
  }, []);
  return (
    <>
      {connected ? (
        children
      ) : (
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <NotConnected />
          </Grid>
          <Grid item>
            <Version />
          </Grid>
        </Grid>
      )}
    </>
  );
}
Connect.propTypes = {
  children: PropTypes.node,
};
