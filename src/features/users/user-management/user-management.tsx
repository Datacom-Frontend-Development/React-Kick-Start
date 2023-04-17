import { ContentArea } from "@components/content";
import { Container } from "@mantine/core";
import { UserManagementHeader } from "./user-management-header";
import {
  SearchFilter,
  SearchPagination,
  SearchResultTable,
} from "./user-management-search";

export const ManageUsers = () => {
  return (
    <ContentArea>
      <UserManagementHeader />
      <Container>
        <ContentArea.Section>
          <SearchFilter />
          <SearchPagination />
          <SearchResultTable />
          <SearchPagination />
        </ContentArea.Section>
      </Container>
    </ContentArea>
  );
};
