import { useAccount, useMsal } from "@azure/msal-react";
import { IconSize } from "@features/shared/app";
import { ActionIcon, Avatar, Menu, useMantineColorScheme } from "@mantine/core";
import { IconLogout, IconMoon, IconSun, IconUser } from "@tabler/icons";
import { Link } from "react-router-dom";

export const UserProfile = () => {
  const { accounts, instance } = useMsal();
  const account = useAccount(accounts[0]);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const logout = () => {
    instance.logoutRedirect();
  };

  const toggleColourScheme = () => {
    toggleColorScheme();
  };

  return (
    <Menu position="bottom-end" width={200}>
      <Menu.Target>
        <ActionIcon>
          <Avatar radius="xl" size={"sm"} src={""} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>{account?.name}</Menu.Label>
        <Menu.Item
          icon={<IconUser size={IconSize.sm} />}
          component={Link}
          to="/app/profile"
        >
          Profile
        </Menu.Item>
        <Menu.Item onClick={logout} icon={<IconLogout size={IconSize.sm} />}>
          Sign Out
        </Menu.Item>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item
          onClick={toggleColourScheme}
          icon={
            colorScheme === "dark" ? (
              <IconSun size={IconSize.sm} />
            ) : (
              <IconMoon size={IconSize.sm} />
            )
          }
        >
          {colorScheme === "dark" ? "light" : "dark"}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
