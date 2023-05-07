// theme.ts file
import type { MantineThemeOverride } from "@mantine/core";
import { rem } from "@mantine/core";

// export your theme object
export const theme: MantineThemeOverride = {
  primaryColor: "blue",
  defaultRadius: 5,
  colors: {
    police: [
      "#C5E0FF",
      "#C5E0FF",
      "#C5E0FF",
      "#C5E0FF",
      "#C5E0FF",
      "#C5E0FF",
      "#C5E0FF",
      "#014991",
      "#002A54",
      "#C5E0FF",
    ],
  },
  primaryShade: 7,
  focusRingStyles: {
    resetStyles: () => ({ outline: "none" }),
    styles: (theme) => ({ outline: `${rem(1)} solid ${theme.colors.blue[7]}` }),
    inputStyles: (theme) => ({
      outline: `${rem(1)} solid ${theme.colors.blue[7]}`,
    }),
  },
};
