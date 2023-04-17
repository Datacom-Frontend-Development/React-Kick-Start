import { Paper, Table } from "@mantine/core";
import { SearchResultRows } from ".";
import { useUserQuery, useUserSearchStore } from "..";

export const SearchResultTable = () => {
  const searchValue = useUserSearchStore((state) => state.searchValue);
  const page = useUserSearchStore((state) => state.page);
  const pageSize = useUserSearchStore((state) => state.pageSize);

  const { data } = useUserQuery(page, pageSize, searchValue);
  const users = data ? data.users : [];
  return (
    <Paper py={"sm"} withBorder>
      <Table verticalSpacing="sm" horizontalSpacing="sm">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Company</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return <SearchResultRows {...user} key={index} />;
          })}
        </tbody>
      </Table>
    </Paper>
  );
};
