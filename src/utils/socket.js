import { io } from 'socket.io-client';
import { getTokenCookie } from './helpers';

export const socket = io({
  timeout: 120000,
  auth: {
    token: (cb) => {
      cb(getTokenCookie());
    },
  },
});
