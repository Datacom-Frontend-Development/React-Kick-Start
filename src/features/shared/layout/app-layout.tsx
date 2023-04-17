import { IDefaultProp } from "@components/common";
import { Box, createStyles } from "@mantine/core";
import { FC } from "react";

const useStyles = createStyles((theme) => {
  return {
    root: {
      display: "flex",
      minHeight: "100%",
    },
  };
});

export const AppLayout: FC<IDefaultProp> = (props) => {
  const { classes } = useStyles();

  return <Box className={classes.root}>{props.children}</Box>;
};
