import type { Meta, StoryObj } from "@storybook/react";

import { LoginForm } from "../components/auth/loginForm";
import React, { ReactNode } from "react";

const meta: Meta<typeof LoginForm> = {
  title: "Components/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {
    welcomeMessage: React.createElement("div", null, "Welcome!"),
  },
};
