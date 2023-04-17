import { ActionIcon, Avatar, Group, Menu, Text } from "@mantine/core";
import {
  IconLineDotted,
  IconMessages,
  IconNote,
  IconPencil,
  IconReportAnalytics,
  IconTrash,
} from "@tabler/icons";
import { FC } from "react";
import { IUser } from "..";

export const SearchResultRows: FC<IUser> = (props) => {
  return (
    <tr>
      <td>
        <Group spacing="sm">
          <Avatar size={40} src={props.image} radius={40} />
          <div>
            <Text weight={500}>
              {props.firstName} {props.lastName}
            </Text>
            <Text color="dimmed" size="xs">
              {props.company.title}
            </Text>
          </div>
        </Group>
      </td>
      <td>
        <Text>{props.company.name}</Text>
        <Text size="xs" color="dimmed">
          {props.company.department}
        </Text>
      </td>
      <td>
        <Text>{props.phone}</Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon>
            <IconPencil />
          </ActionIcon>
          {/* transitionDuration={0} */}
          <Menu>
            <Menu.Target>
              <ActionIcon>
                <IconLineDotted />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item icon={<IconMessages />}>Send message</Menu.Item>
              <Menu.Item icon={<IconNote />}>Add note</Menu.Item>
              <Menu.Item icon={<IconReportAnalytics />}>Analytics</Menu.Item>
              <Menu.Item icon={<IconTrash />} color="red">
                Terminate contract
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </td>
    </tr>
  );
};
