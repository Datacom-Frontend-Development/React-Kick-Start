import {
  Box,
  Center,
  createStyles,
  SegmentedControl,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons";
import { FC } from "react";

interface IProp {}
const useStyles = createStyles((theme) => ({
  content: {
    gap: theme.spacing.xs,
  },
}));
export const ColourSchemeToggle: FC<IProp> = (props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const { classes } = useStyles();
  return (
    <SegmentedControl
      size="md"
      value={colorScheme}
      onChange={() => toggleColorScheme()}
      data={[
        {
          value: "light",
          label: (
            <Center className={classes.content}>
              <IconSun />
              <Box>Light</Box>
            </Center>
          ),
        },
        {
          value: "dark",
          label: (
            <Center className={classes.content}>
              <IconMoon />
              <Box>Dark</Box>
            </Center>
          ),
        },
      ]}
    />
  );
};
