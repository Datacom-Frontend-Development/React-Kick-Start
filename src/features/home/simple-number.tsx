import { ContentArea } from "@components/content";
import { useHomeStore } from "./home-store";

export const SimpleNumber = () => {
  const value = useHomeStore((state) => state.value);
  return <ContentArea.Paper>{value}</ContentArea.Paper>;
};
