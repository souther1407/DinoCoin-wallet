import { useNotification } from "web3uikit";

export default function useNotify() {
  const dispatch = useNotification();
  return (type, title, message, icon) => {
    dispatch({ position: "topR", type, icon, message, title });
  };
}
