import { hyperLinkColour } from "@components/common";
import { Global, MantineTheme } from "@mantine/core";

export const GlobalStyle = () => {
  return (
    <Global
      styles={(theme: MantineTheme) => ({
        "body, html, #root": {
          height: "100%",
        },
        a: {
          color: hyperLinkColour(theme),
          textDecoration: "none",
        },
      })}
    />
  );
};
