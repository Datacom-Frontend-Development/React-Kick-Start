import { backgroundColor, IDefaultProp } from "@components/common";
import { Box, createStyles } from "@mantine/core";
import { FC } from "react";
import { ContentPaper } from "./content-paper";
import { ContentSection } from "./content-section";

const useStyles = createStyles((theme) => {
  return {
    root: {
      background: backgroundColor(theme),
      flexGrow: 1,
    },
  };
});

interface IContentAreaComposition {
  Section: FC<IDefaultProp>;
  Paper: FC<IDefaultProp>;
}

const ContentArea: FC<IDefaultProp> & IContentAreaComposition = (props) => {
  const { classes } = useStyles();

  return <Box className={classes.root}>{props.children}</Box>;
};

ContentArea.Section = ContentSection;
ContentArea.Paper = ContentPaper;
export { ContentArea };
