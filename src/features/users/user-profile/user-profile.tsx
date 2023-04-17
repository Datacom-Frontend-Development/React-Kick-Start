import { ColourSchemeToggle } from "@components/colour-scheme-toggle";
import { ContentArea } from "@components/content";
import { Header } from "@components/header";
import { SimpleHeader } from "@features/shared/simple-header";
import { Container, Grid } from "@mantine/core";

export const UserProfilePage = () => {
  return (
    <ContentArea>
      <Header>
        <SimpleHeader title="Profile" breadcrumbs={[]}></SimpleHeader>
      </Header>
      <Container>
        <ContentArea.Section>
          <Grid>
            <Grid.Col span={4}>
              <ContentArea.Paper>
                <ColourSchemeToggle />
              </ContentArea.Paper>
            </Grid.Col>
            <Grid.Col span={4}></Grid.Col>
            <Grid.Col span={4}></Grid.Col>
            <Grid.Col span={4}></Grid.Col>
          </Grid>
        </ContentArea.Section>
      </Container>
    </ContentArea>
  );
};
