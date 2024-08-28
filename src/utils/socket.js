import { connect } from 'socket.io-client';
import { getTokenCookie } from './helpers';

const url = import.meta.env.PROD
  ? import.meta.env.VITE_BACKEND_URL
  : 'http://localhost:3000';

export const socket = connect(url, {
  path: '/api/v1/socket',
  addTrailingSlash: false,
  timeout: 120000,
  withCredentials: true,
  auth: {
    token: (cb) => {
      cb(getTokenCookie());
    },
  },
});
