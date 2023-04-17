import {
  backgroundHoverColor,
  fontColour,
  hyperLinkColour,
} from "@components/common";
import { useRouteMatch } from "@hooks/route";
import { Box, createStyles, UnstyledButton } from "@mantine/core";
import { FC, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { ILink } from "..";

export const useNavLinkStyles = createStyles((theme) => {
  return {
    navLabel: {
      display: "flex",
      gap: theme.spacing.xs,
      alignItems: "center",
    },
    navIcon: {
      width: theme.spacing.sm * 2,
      height: theme.spacing.sm * 2,
    },
    navLink: {
      padding: ` 0px ${theme.spacing.xs}px`,
      height: "45px",
      display: "flex",
      alignItems: "center",
      fontWeight: 500,
      justifyContent: "space-between",
      gap: theme.spacing.xs,
      color: fontColour(theme),
      borderRadius: theme.radius.sm,

      "&:hover": {
        background: backgroundHoverColor(theme),
        color: hyperLinkColour(theme),
        svg: {
          stroke: hyperLinkColour(theme),
        },
      },
    },
    activeNav: {
      background: backgroundHoverColor(theme),
      color: hyperLinkColour(theme),
      svg: {
        stroke: hyperLinkColour(theme),
      },
    },
  };
});

export const SideNavigationLink: FC<ILink> = forwardRef(
  (
    { icon: LeftIcon, label, path, onClick, rightIcon: RightIcon }: ILink,
    ref: any
  ) => {
    const { classes, cx } = useNavLinkStyles();
    const hasPath = path && path.length > 0;
    const to = hasPath ? path : "";
    let match = useRouteMatch(to);
    let navigate = useNavigate();

    const onClicked = () => {
      if (onClick) {
        onClick();
      }

      if (hasPath) {
        navigate(to);
      }
    };

    return (
      <UnstyledButton
        ref={ref}
        className={
          match && hasPath
            ? cx(classes.navLink, classes.activeNav)
            : classes.navLink
        }
        onClick={onClicked}
      >
        <Box className={classes.navLabel}>
          {LeftIcon && <LeftIcon />}
          {label}
        </Box>
        {RightIcon && RightIcon}
      </UnstyledButton>
    );
  }
);
