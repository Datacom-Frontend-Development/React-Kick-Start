import { SideNavigation } from "@components/side-navigation";
import { Image, Text } from "@mantine/core";
import { loadNavigation } from ".";

export const Navigation = () => {
  const data = loadNavigation();
  return (
    <SideNavigation>
      <SideNavigation.Header>
        <Image width={24} height={24} src={"../images/logo.svg"} />{" "}
        <Text weight={"bold"}>Logo</Text>
      </SideNavigation.Header>
      <SideNavigation.Content>
        {data.map((item, index) => {
          return (
            <SideNavigation.Menu
              path={item.path}
              key={index}
              icon={item.icon}
              label={item.label}
              links={item.links}
            />
          );
        })}
      </SideNavigation.Content>
    </SideNavigation>
  );
};
