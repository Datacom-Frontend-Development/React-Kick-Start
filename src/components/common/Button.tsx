import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
} from "@mantine/core";
import { ReactNode } from "react";

export interface ButtonProps extends MantineButtonProps {
  size?: MantineButtonProps["size"];
  variant?: MantineButtonProps["variant"];
  primary?: boolean;
  compact?: boolean;
  onClick?: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = ({ primary = false, ...props }: ButtonProps) => {
  const setPrimary = primary ? "filled" : props.variant || "outline";
  return (
    <>
      <MantineButton {...props} variant={setPrimary}>
        {props.children}
      </MantineButton>
    </>
  );
};
