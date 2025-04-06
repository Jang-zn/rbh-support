import { create } from 'zustand';

export const useRestaurantStore = create((set) => ({
  entries: [],
  addEntry: (entry) => set((state) => ({
    entries: [
      ...state.entries,
      {
        ...entry,
        id: Date.now().toString(),
        date: new Date().toLocaleDateString()
      }
    ]
  }))
})); 