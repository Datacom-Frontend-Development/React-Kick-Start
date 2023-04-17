import create from "zustand";

export interface ISearchState {
  page: number;
  pageSize: number;
  searchValue: string;
}

const initialState: ISearchState = {
  page: 1,
  pageSize: 10,
  searchValue: "",
};

export const useUserSearchStore = create<ISearchState>(() => initialState);

export const setPage = (page: number) => {
  useUserSearchStore.setState({ page });
};

export const setPageSize = (pageSize: number) => {
  useUserSearchStore.setState({ pageSize, page: 1 });
};

export const setSearchValue = (searchValue: string) => {
  useUserSearchStore.setState({ searchValue, page: 1 });
};
