import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/common/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    children: "Button",
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "xl",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "xs",
    children: "Button",
  },
};
