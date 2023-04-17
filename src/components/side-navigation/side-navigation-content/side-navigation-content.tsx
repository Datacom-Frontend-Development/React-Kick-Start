import { IDefaultProp } from "@components/common";
import { Box, createStyles, Navbar } from "@mantine/core";
import { FC } from "react";

export const useSideNavigationStyles = createStyles((theme) => ({
  content: {
    padding: `0 ${theme.spacing.xs}px`,
    display: "flex",
    gap: 2,
    flexDirection: "column",
  },
}));

export interface ISideNavigationContentProp extends IDefaultProp {}

export const SideNavigationContent: FC<ISideNavigationContentProp> = (
  props
) => {
  const { classes } = useSideNavigationStyles();

  return (
    <Navbar.Section grow>
      <Box className={classes.content}>{props.children}</Box>
    </Navbar.Section>
  );
};
