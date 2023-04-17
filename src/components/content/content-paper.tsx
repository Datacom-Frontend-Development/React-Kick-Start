import { IDefaultProp } from "@components/common";
import { Paper } from "@mantine/core";
import { FC } from "react";

export const ContentPaper: FC<IDefaultProp> = (props) => {
  return <Paper p="md">{props.children}</Paper>;
};
