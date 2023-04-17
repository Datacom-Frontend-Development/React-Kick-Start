import { borderColour, IDefaultProp } from "@components/common";
import { Box, createStyles } from "@mantine/core";
import { FC } from "react";
import { useNavStore } from ".";
import {
  ISideNavigationContentProp,
  SideNavigationContent,
} from "./side-navigation-content/side-navigation-content";
import { SideNavigationGroupLink } from "./side-navigation-content/side-navigation-group-link";
import { SideNavigationHeader } from "./side-navigation-header/side-navigation-header";
import { IGroupLink, NavWidth } from "./side-navigation-models";

const useStyles = createStyles((theme, isOpen: boolean) => ({
  root: {
    position: "sticky",
    top: 0,
    borderRight: `1px solid ${borderColour(theme)}`,
    transition: "width 200ms ease",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  collapsed: {
    width: NavWidth.collapsed,
  },
  expanded: {
    width: NavWidth.expanded,
  },
}));

interface ISideNavigationComposition {
  Header: React.FC<IDefaultProp>;
  Content: React.FC<ISideNavigationContentProp>;
  Menu: React.FC<IGroupLink>;
}

const SideNavigation: FC<IDefaultProp> & ISideNavigationComposition = (
  props
) => {
  const isOpen = useNavStore((state) => state.isOpen);
  const { classes, cx } = useStyles(isOpen);
  return (
    <Box
      className={cx(
        classes.root,
        isOpen ? classes.expanded : classes.collapsed
      )}
    >
      {props.children}
    </Box>
  );
};

SideNavigation.Header = SideNavigationHeader;
SideNavigation.Content = SideNavigationContent;
SideNavigation.Menu = SideNavigationGroupLink;

export { SideNavigation };
