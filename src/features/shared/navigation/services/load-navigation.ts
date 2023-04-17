import { IGroupLink } from "@components/side-navigation";
import {
  IconAdjustments,
  IconCalendarStats,
  IconGauge,
  IconUsers,
} from "@tabler/icons";

export const mockData: Array<IGroupLink> = [
  { label: "Home", icon: IconGauge, path: "/app" },

  {
    label: "Users",
    icon: IconUsers,
    links: [
      { label: "Manage users", path: "/app/users" },
      { label: "Roles and permissions", path: "/app/roles-and-permissions" },
    ],
  },
  { label: "Settings", icon: IconAdjustments },
  {
    label: "Security",
    icon: IconCalendarStats,
    links: [
      { label: "Enable 2FA", path: "" },
      { label: "Change password", path: "" },
      { label: "Recovery codes", path: "" },
    ],
  },
];

export const loadNavigation = (): Array<IGroupLink> => {
  return mockData;
};
