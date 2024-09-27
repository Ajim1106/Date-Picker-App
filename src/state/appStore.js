import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAppStore = create(
  persist(
    (set) => ({
      userdata: {
        recurringPattern: '',
        startDate: '',
        endDate: '',
      },
      updateUserData: (newData) => 
        set((state) => ({ userdata: { ...state.userdata, ...newData } })),
    }),
    {
      name: 'app-storage',
    }
  )
);

export default useAppStore;
