import React from 'react';
import { NotConnected } from './NotConnected';
import PropTypes from 'prop-types';
import { Socket } from 'socket.io-client';
import { useAppDispatch } from '../../Reducer';
import { resetUser } from '../../Reducer/User';
import { SocketContext } from '../../Providers/Socket';
import getVersion from '../../utils/getVersion';
const connect = (socket: Socket, callback: (value: boolean) => void) => {
  socket.on('connect', () => {
    socket.emit('version', getVersion());
    callback(true);
  });
  socket.on('new_version', (args) => {
    document.location.reload();
  });
  socket.on('disconnect', () => {
    callback(false);
  });
};
interface ConnectProps {
  children: React.ReactNode;
}
export function Connect({ children }: ConnectProps) {
  const dispatch = useAppDispatch();
  const socket = React.useContext(SocketContext);
  const [connected, setConnected] = React.useState(false);
  React.useEffect(() => {
    if (socket) connect(socket, setConnected);
  }, [socket]);
  React.useEffect(() => {
    if (connected === false) {
      dispatch(resetUser());
    }
  }, [connected, dispatch]);
  return <>{connected ? children : <NotConnected />}</>;
}
Connect.propTypes = {
  children: PropTypes.node,
};
