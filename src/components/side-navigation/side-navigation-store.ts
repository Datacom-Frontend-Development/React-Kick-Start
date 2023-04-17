import create from "zustand";

export interface INavState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const useNavStore = create<INavState>((set) => ({
  isOpen: true,
  open: () => {
    set((state) => ({ ...state, isOpen: true }));
  },
  close: () => {
    set((state) => ({ ...state, isOpen: false }));
  },
  toggle: () => {
    set((state) => ({ ...state, isOpen: !state.isOpen }));
  },
}));
