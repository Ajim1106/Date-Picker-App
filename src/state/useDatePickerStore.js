import { create } from 'zustand';

export const useDatePickerStore = create((set) => ({
  recurringPattern: 'daily', 
  startDate: '', 
  endDate: '', 
  customization: {}, 

  setRecurringPattern: (pattern) => set({ recurringPattern: pattern }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setCustomization: (details) => set({ customization: details }),
}));
