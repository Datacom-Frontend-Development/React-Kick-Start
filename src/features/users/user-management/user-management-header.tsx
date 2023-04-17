import { Header } from "@components/header";
import { SimpleHeader } from "@features/shared/simple-header";
import { Button } from "@mantine/core";
import { IconUserPlus } from "@tabler/icons";

export const UserManagementHeader = () => {
  return (
    <Header>
      <SimpleHeader title="Users" breadcrumbs={[]}></SimpleHeader>

      <Header.Section align="right">
        <Button variant="outline" leftIcon={<IconUserPlus size={18} />}>
          Add user +
        </Button>
      </Header.Section>
    </Header>
  );
};
