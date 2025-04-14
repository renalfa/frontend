import { UserDetailContext } from "@/context/user-context";
import { useContext } from "react";

export const useUser = () => {
  const context = useContext(UserDetailContext);

  return context;
};
