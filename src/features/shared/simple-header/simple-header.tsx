import {
  BreadcrumbRouter,
  IBreadcrumbRouterModel,
} from "@components/breadcrumb-router";
import { IDefaultProp } from "@components/common";
import { Header } from "@components/header";
import { FC, ReactNode } from "react";
import { UserProfile } from "./user-profile";

interface IProp extends IDefaultProp {
  title: string;
  breadcrumbs: Array<IBreadcrumbRouterModel>;
  rightContent?: ReactNode;
  content?: ReactNode;
}

export const SimpleHeader: FC<IProp> = (props) => {
  return (
    <>
      <Header.Section>
        <Header.Section align="left">
          <BreadcrumbRouter items={props.breadcrumbs} />
        </Header.Section>
        <Header.Section align="right">
          <UserProfile />
        </Header.Section>
      </Header.Section>
      <Header.Section>
        <Header.BackButton />
        <Header.Title>{props.title}</Header.Title>
        {props.children} {props.content}
        <Header.Section align="right">{props.rightContent}</Header.Section>
      </Header.Section>
    </>
  );
};
