import { Group, Pagination, Select } from "@mantine/core";
import { useUserQuery } from "..";
import {
  setPage,
  setPageSize,
  useUserSearchStore,
} from "../user-management-store";

export const SearchPagination = () => {
  const searchValue = useUserSearchStore((state) => state.searchValue);
  const page = useUserSearchStore((state) => state.page);
  const pageSize = useUserSearchStore((state) => state.pageSize);

  const { data } = useUserQuery(page, pageSize, searchValue);
  const total = data ? Math.ceil(data.total / pageSize) : 0.0;

  return (
    <Group spacing={"sm"}>
      <Select
        value={`${pageSize}`}
        onChange={(value) => setPageSize(value ? Number.parseInt(value) : 10)}
        sx={{
          width: 100,
        }}
        data={[
          { value: "10", label: "10" },
          { value: "20", label: "20" },
          { value: "30", label: "30" },
        ]}
      />

      <Pagination page={page} total={total} onChange={setPage} />
    </Group>
  );
};
