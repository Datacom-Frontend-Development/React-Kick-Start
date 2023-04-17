import { IDefaultProp } from "@components/common";
import { Box, createStyles } from "@mantine/core";
import { FC } from "react";

const useStyles = createStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.md,
      paddingTop: theme.spacing.md,
      paddingBottom: theme.spacing.md,
    },
  };
});

export const ContentSection: FC<IDefaultProp> = (props) => {
  const { classes } = useStyles();

  return <Box className={classes.root}>{props.children}</Box>;
};
