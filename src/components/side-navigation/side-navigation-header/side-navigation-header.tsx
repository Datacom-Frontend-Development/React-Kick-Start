import { IDefaultProp } from "@components/common";
import { ActionIcon, Box, createStyles, Navbar } from "@mantine/core";
import { IconMenu2, IconX } from "@tabler/icons";
import { FC } from "react";
import { useNavStore } from "..";

const useStyles = createStyles((theme, isOpen: boolean) => ({
  header: {
    minHeight: theme.other.appHeader,
    padding: theme.spacing.xs,
    display: "flex",
    flexDirection: isOpen ? "row" : "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    display: "flex",
    gap: theme.spacing.sm,
  },
}));

export const SideNavigationHeader: FC<IDefaultProp> = (props) => {
  const toggle = useNavStore((state) => state.toggle);
  const isOpen = useNavStore((state) => state.isOpen);
  const { classes } = useStyles(isOpen);

  return (
    <Navbar.Section className={classes.header}>
      {isOpen && (
        <Box px={"sm"} className={classes.content}>
          {props.children}
        </Box>
      )}

      <ActionIcon onClick={() => toggle()}>
        {isOpen ? <IconX /> : <IconMenu2 />}
      </ActionIcon>
    </Navbar.Section>
  );
};
