import { Fetcher } from "@infrastructure/fetcher";
import { useQuery } from "@tanstack/react-query";
import { IUserCollectionResponse } from "./user-management-models";

const baseAPI = "https://dummyjson.com";

export const loadUser = async (
  page: number,
  pageSize: number
): Promise<IUserCollectionResponse | undefined> => {
  const data = await Fetcher.Get<IUserCollectionResponse>(
    `${baseAPI}/users?limit=${pageSize}&skip=${page * pageSize}`
  );
  return data.parsedBody;
};

export const searchUsers = async (
  page: number,
  pageSize: number,
  searchValue: string
): Promise<IUserCollectionResponse | undefined> => {
  const data = await Fetcher.Get<IUserCollectionResponse>(
    `${baseAPI}/users/search?q=${searchValue}&limit=${pageSize}&skip=${
      page * pageSize
    }`
  );
  return data.parsedBody;
};

export const useUserQuery = (
  page: number = 1,
  pageSize: number = 10,
  searchValue: string = ""
) => {
  const hasSearchValue = searchValue && searchValue.length > 0;
  const requestKey = hasSearchValue ? "search" : "user";

  const results = useQuery<IUserCollectionResponse | undefined, Error>(
    ["searchUsers", searchValue, page, pageSize, requestKey],
    () =>
      hasSearchValue
        ? searchUsers(page - 1, pageSize, searchValue)
        : loadUser(page - 1, pageSize)
  );

  return results;
};
