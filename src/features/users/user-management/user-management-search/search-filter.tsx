import { Box, Group, Select, TextInput } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons";
import { useEffect, useState } from "react";
import { setSearchValue } from "../user-management-store";

export const SearchFilter = () => {
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 200, { leading: true });

  useEffect(() => {
    setSearchValue(debounced);
  }, [debounced]);

  return (
    <Box py="md">
      <Group>
        <Box>
          <TextInput
            label="Search"
            placeholder="Search on any field"
            icon={<IconSearch size={14} />}
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
          />
        </Box>
        <Select
          label="Status"
          clearable
          icon={<IconSearch size={14} />}
          placeholder="Status"
          data={[
            { value: "active", label: "Active" },
            { value: "terminated", label: "Terminated" },
            { value: "pending", label: "Pending" },
          ]}
        />
      </Group>
    </Box>
  );
};
