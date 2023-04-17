import { borderColour } from "@components/common";
import { IconSize } from "@features/shared/app";
import { Box, Collapse, createStyles, Menu } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import { FC, useState } from "react";
import { useNavigate } from "react-router";
import { IGroupLink, useNavStore } from "..";
import { SideNavigationLink } from "./side-navigation-link";

const useStyles = createStyles((theme) => {
  return {
    nestedNavRoot: {
      borderLeft: "1px solid " + borderColour(theme),
      flexDirection: "column",
      marginLeft: 22,
      padding: `0px 0px 0px ${theme.spacing.xs}px `,
    },
    nestedNavContainer: {
      display: "flex",
      gap: 2,
      flexDirection: "column",
    },
    chevron: {
      transition: "transform 200ms ease",
    },
    chevronOpen: {
      transform: `rotate(${90}deg)`,
    },
    chevronClose: {
      transform: `rotate(${0}deg)`,
    },
  };
});

export const SideNavigationGroupLink: FC<IGroupLink> = (props) => {
  const isOpen = useNavStore((state) => state.isOpen);

  return isOpen ? <ExpandedView {...props} /> : <CollapsedView {...props} />;
};

const ExpandedView: FC<IGroupLink> = ({
  icon,
  label,
  path,
  links,
}: IGroupLink) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const hasLinks = links && links.length > 0;
  const { classes, cx } = useStyles();
  return (
    <>
      <SideNavigationLink
        icon={icon}
        label={label}
        path={path}
        onClick={() => (hasLinks ? setIsOpen(!isOpen) : false)}
        rightIcon={
          hasLinks ? (
            <IconChevronRight
              size={IconSize.sm}
              className={cx(
                classes.chevron,
                isOpen ? classes.chevronOpen : classes.chevronClose
              )}
            />
          ) : undefined
        }
      />
      {hasLinks && (
        <Collapse in={isOpen} className={classes.nestedNavRoot}>
          <Box className={classes.nestedNavContainer}>
            {links.map((item, index) => {
              return <SideNavigationLink key={index} {...item} />;
            })}
          </Box>
        </Collapse>
      )}
    </>
  );
};

const CollapsedView: FC<IGroupLink> = ({
  icon,
  label,
  path,
  links,
}: IGroupLink) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const hasLinks = links && links.length > 0;
  let navigate = useNavigate();
  const navigateTo = (path: string) => {
    navigate(path);
  };
  return (
    <>
      {hasLinks ? (
        <Menu position="right" width={200} withinPortal={true}>
          <Menu.Target>
            <SideNavigationLink icon={icon} label={""} />
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>{label}</Menu.Label>
            {links.map((item, index) => {
              return (
                <Menu.Item onClick={() => navigateTo(item.path!)} key={index}>
                  {item.label}
                </Menu.Item>
              );
            })}
          </Menu.Dropdown>
        </Menu>
      ) : (
        <SideNavigationLink
          icon={icon}
          label={""}
          path={path}
          onClick={() => (hasLinks ? setIsOpen(!isOpen) : false)}
        />
      )}
    </>
  );
};
