import { MantineTheme, MantineThemeColors } from "@mantine/core";

export const fontColour = (theme: MantineTheme): keyof MantineThemeColors => {
  return theme.colorScheme === "dark"
    ? theme.colors.dark[1]
    : theme.colors.gray[7];
};

export const hyperLinkColour = (
  theme: MantineTheme
): keyof MantineThemeColors => {
  return theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 7];
};

export const backgroundColor = (
  theme: MantineTheme
): keyof MantineThemeColors => {
  return theme.colorScheme === "dark"
    ? theme.colors.dark[8]
    : theme.colors.gray[1];
};

export const backgroundColorShade = (
  theme: MantineTheme
): keyof MantineThemeColors => {
  return theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white;
};

export const backgroundHoverColor = (
  theme: MantineTheme
): keyof MantineThemeColors => {
  return theme.colorScheme === "dark"
    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
    : theme.colors[theme.primaryColor][0];
};

export const borderColour = (theme: MantineTheme): keyof MantineThemeColors => {
  return theme.colorScheme === "dark"
    ? theme.colors.dark[5]
    : theme.colors.gray[2];
};
