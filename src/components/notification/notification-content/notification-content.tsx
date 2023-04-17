import { IDefaultProp } from "@components/common";
import { FC } from "react";

export const NotificationSection: FC<IDefaultProp> = (props) => {
  return <div>{props.children}</div>;
};

export const NotificationContent: FC<IDefaultProp> = (props) => {
  return <div>{props.children}</div>;
};
