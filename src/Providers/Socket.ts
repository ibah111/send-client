import React from 'react';
import { io } from 'socket.io-client';
import server from '../utils/server';

export const socket = io(server());
export const SocketContext = React.createContext(socket);
