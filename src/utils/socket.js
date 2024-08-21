import { io } from 'socket.io-client';
import { getTokenCookie } from './helpers';

export const socket = io({
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  timeout: 120000,
  query: {
    token: getTokenCookie(),
  },
});
