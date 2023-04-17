import { IDefaultProp } from "@components/common";
import { AppTheme } from "@features/shared/app";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export const RootLayout: FC<IDefaultProp> = (props) => {
  return (
    <AppTheme>
      <Outlet />
    </AppTheme>
  );
};
