import { ColourSchemeToggle } from "@components/colour-scheme-toggle";
import { ContentArea } from "@components/content";
import { Header } from "@components/header";
import { SimpleHeader } from "@features/shared/simple-header";
import { Button, Container, Grid } from "@mantine/core";
import { decrement, increment } from "./home-store";
import { SimpleNumber } from "./simple-number";

export const Home = () => {
  return (
    <ContentArea>
      <Header>
        <SimpleHeader title="Home" breadcrumbs={[]}></SimpleHeader>

        <Header.Section align="right">
          <Button variant="outline" onClick={() => increment()}>
            Increment
          </Button>
          <Button variant="filled" onClick={() => decrement()}>
            Decrement
          </Button>
        </Header.Section>
      </Header>
      <Container>
        <ContentArea.Section>
          <Grid>
            <Grid.Col span={4}>
              <ContentArea.Paper>
                <ColourSchemeToggle />
              </ContentArea.Paper>
            </Grid.Col>
            <Grid.Col span={4}>
              <SimpleNumber />
            </Grid.Col>
            <Grid.Col span={4}>
              <SimpleNumber />
            </Grid.Col>
            <Grid.Col span={4}>
              <SimpleNumber />
            </Grid.Col>
          </Grid>
          <SimpleNumber />
        </ContentArea.Section>
      </Container>
    </ContentArea>
  );
};
