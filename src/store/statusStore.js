import { create } from 'zustand';

const useStatusStore = create((set) => ({
  status: 'offline',
  setStatus: (status) => set({ status }),
}));

export default useStatusStore;
