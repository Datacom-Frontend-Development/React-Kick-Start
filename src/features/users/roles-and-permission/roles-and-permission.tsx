import { ContentArea } from "@components/content";
import { Header } from "@components/header";
import { SimpleHeader } from "@features/shared/simple-header";
import { Button, Container } from "@mantine/core";
import { IconUserPlus } from "@tabler/icons";

export const RolesAndPermission = () => {
  return (
    <ContentArea>
      <Header>
        <SimpleHeader
          title="Roles and Permissions"
          breadcrumbs={[]}
        ></SimpleHeader>

        <Header.Section align="right">
          <Button variant="outline" leftIcon={<IconUserPlus size={18} />}>
            Add Role
          </Button>
        </Header.Section>
      </Header>
      <Container>
        <ContentArea.Section></ContentArea.Section>
      </Container>
    </ContentArea>
  );
};
