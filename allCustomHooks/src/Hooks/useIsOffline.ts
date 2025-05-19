// hook that returns true whenever user goes offline
// const isOffline=useIsOffline()

import { useState } from "react";

const useIsOffline = () => {
  const [isOffline, setIsOffline] = useState(false);
  window.addEventListener("offline", () => {
    setIsOffline(true);
  });
  return [isOffline];
};

export default useIsOffline;
