import { create } from "zustand";

export const useAppStore = create((set) => ({
  cart: [],
  setCart: (cart) => set({ cart }),
}));
