import { io } from 'socket.io-client';
import { getTokenCookie } from './helpers';

const url = import.meta.env.PROD
  ? import.meta.env.VITE_BACKEND_URL + '/socket.io'
  : 'http://localhost:3000/socket.io';

export const socket = io(url, {
  timeout: 120000,
  auth: {
    token: (cb) => {
      cb(getTokenCookie());
    },
  },
});
