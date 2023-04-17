import { IDefaultProp } from "@components/common";
import { createStyles, Text } from "@mantine/core";
import { FC } from "react";

const useStyles = createStyles((theme) => ({
  root: {
    fontWeight: 700,
  },
}));

export interface ITitleProp extends IDefaultProp {}

export const Title: FC<ITitleProp> = (props) => {
  const { classes } = useStyles();
  return (
    <Text size="xl" className={classes.root}>
      {props.children}
    </Text>
  );
};
