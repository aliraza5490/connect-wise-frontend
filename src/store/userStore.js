import api from '@/utils/api';
import {
  decodeJWT,
  getTokenCookie,
  removeTokenCookie,
  setTokenCookie,
} from '@/utils/helpers';
import { socket } from '@/utils/socket';
import { create } from 'zustand';

const useUserStore = create((set, get) => ({
  user: null,
  isLoading: false,
  isOnline: false,
  login: async (token, signal) => {
    try {
      setTokenCookie(token);
      const { data } = await api.get('/info/me', {
        signal: signal,
      });
      if (!data) {
        set({ user: null, isOnline: false });
      }
      set({ user: data });
      if (socket.disconnected) {
        socket.auth.token = token;
        socket.connect();
      }
      setTimeout(() => {
        // recheck if socket is connected
        if (socket.connected) {
          console.log('emit join', data._id);
          socket.emit('join', data._id, (res) => {
            console.log(res);
            if (res.status === 'ok') {
              set({ isOnline: true });
            }
          });
          console.log('connected');
        }
      }, 1000);
    } catch (err) {
      console.error(err);
      if (
        err.response &&
        err.response.status >= 400 &&
        err.response.status < 500
      ) {
        removeTokenCookie();
      }
    }
  },
  logOut: () => {
    set({ user: null });
    removeTokenCookie();
  },
  refresh: async (signal) => {
    try {
      set({ isLoading: true });
      if (get().user) return;
      const token = getTokenCookie();
      const decode = decodeJWT(token);
      const isExpire = decode && Date.now() >= decode.exp * 1000;
      if (token && !isExpire) {
        await get().login(token, signal);
      }
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoading: false });
    }
  },
  updateStatus: (status) => {
    if (status && socket.connected) {
      const data = get().user;
      setTimeout(() => {
        console.log('emit join', data._id);
        socket.emit('join', data._id, (res) => {
          console.log(res);
          if (res.status === 'ok') {
            set({ isOnline: true });
          }
        });
      }, 1000);
      console.log('connected');
    }
    set((state) => {
      state.isOnline = status;
      console.log('status update:', status);
    });
  },
}));

export default useUserStore;
