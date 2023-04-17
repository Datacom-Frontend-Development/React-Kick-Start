import { IDefaultProp } from "@components/common";
import { IconSize } from "@features/shared/app";
import { ActionIcon, Breadcrumbs, createStyles } from "@mantine/core";
import { IconChevronRight, IconHome } from "@tabler/icons";
import { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IBreadcrumbRouterModel } from ".";

const useStyles = createStyles((theme) => ({
  root: {
    fontSize: theme.fontSizes.sm,
    alignItems: "center",
  },
}));

interface IProp extends IDefaultProp {
  items: Array<IBreadcrumbRouterModel>;
}

export const BreadcrumbRouter: FC<IProp> = (props) => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const items = [...props.items].map((item, index) => (
    <NavLink to={item.to} key={index}>
      {item.title}
    </NavLink>
  ));

  return (
    <>
      <ActionIcon onClick={() => navigate("/app")}>
        <IconHome />
      </ActionIcon>
      <Breadcrumbs
        separator={<IconChevronRight size={IconSize.sm} />}
        classNames={{ root: classes.root }}
      >
        {items}
      </Breadcrumbs>
    </>
  );
};
