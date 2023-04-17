import { IDefaultProp } from "@components/common";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { FC, useState } from "react";
import { GlobalStyle } from "..";

export const AppTheme: FC<IDefaultProp> = (props) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          primaryColor: "cyan",
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <GlobalStyle />
        {props.children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
