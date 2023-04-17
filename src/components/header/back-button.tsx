import { ActionIcon } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const BackButton: FC = () => {
  const navigate = useNavigate();
  return (
    <ActionIcon onClick={() => navigate(-1)}>
      <IconArrowLeft />
    </ActionIcon>
  );
};
