import create from "zustand";

export interface IHomeState {
  value: number;
}

const initialState: IHomeState = {
  value: 0,
};

export const useHomeStore = create<IHomeState>((set, get) => ({
  ...initialState,
}));

export const increment = () => {
  let currentState = useHomeStore.getState();
  currentState.value++;
  useHomeStore.setState({ ...currentState });
};

export const decrement = () => {
  let currentState = useHomeStore.getState();
  currentState.value--;
  useHomeStore.setState({ ...currentState });
};
