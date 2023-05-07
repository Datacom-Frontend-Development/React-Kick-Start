import { MantineProvider } from "@mantine/core";
// import theme object you've exported in previous step
import { theme } from "./theme";

// Create a wrapper component that will contain all your providers.
// Usually you should render all providers in this component:
// MantineProvider, DatesProvider, Notifications, Spotlight, etc.
function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      {props.children}
    </MantineProvider>
  );
}

export const decorators = [
  (renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];
