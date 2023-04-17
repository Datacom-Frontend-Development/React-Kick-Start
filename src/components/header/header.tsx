import {
  backgroundColorShade,
  borderColour,
  IDefaultProp,
} from "@components/common";
import { SurfaceIndex } from "@features/shared/app";
import { Box, Container, createStyles } from "@mantine/core";
import { FC } from "react";
import { BackButton } from "./back-button";
import { IHeaderProp, Section } from "./header-section";
import { ITitleProp, Title } from "./header-title";

const useStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.xs,
    background: backgroundColorShade(theme),
    borderBottom: `1px solid ${borderColour(theme)}`,
    position: "sticky",
    top: 0,
    zIndex: SurfaceIndex.level_2,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.xs,
  },
}));

interface IProp extends IDefaultProp {}

interface IHeaderComposition {
  Title: React.FC<ITitleProp>;
  Section: React.FC<IHeaderProp>;
  BackButton: React.FC;
}

const Header: FC<IProp> & IHeaderComposition = (props) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Container className={classes.container}>{props.children}</Container>
    </Box>
  );
};

Header.Title = Title;
Header.Section = Section;
Header.BackButton = BackButton;

export { Header };
