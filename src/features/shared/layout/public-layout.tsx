import { Outlet } from "react-router-dom";
import { AppLayout } from "./app-layout";

export const PublicLayout = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};
