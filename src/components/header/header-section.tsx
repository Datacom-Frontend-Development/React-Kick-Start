import { IDefaultProp } from "@components/common";
import { Box, createStyles } from "@mantine/core";
import { FC } from "react";

const useStyles = createStyles((theme, align: Align | undefined) => ({
  root: {
    display: "flex",
    gap: theme.spacing.xs,
    alignItems: "center",
    flexGrow: 1,
    justifyContent: align,
  },
}));

type Align = "right" | "left" | "center";

export interface IHeaderProp extends IDefaultProp {
  align?: Align;
}

export const Section: FC<IHeaderProp> = (props) => {
  const { classes } = useStyles(props.align);
  return <Box className={classes.root}>{props.children}</Box>;
};
