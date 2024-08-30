import { io } from 'socket.io-client';
import { getTokenCookie } from './helpers';

const url = import.meta.env.PROD
  ? import.meta.env.VITE_BACKEND_URL
  : 'http://localhost:3000';

export const socket = io(url, {
  path: '/api/v1/socket',
  timeout: 120000,
  withCredentials: true,
  autoConnect: false,
  auth: {
    token: (cb) => {
      cb(getTokenCookie());
    },
  },
});
