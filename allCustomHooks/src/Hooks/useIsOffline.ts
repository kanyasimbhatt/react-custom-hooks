// hook that returns true whenever user goes offline
// const isOffline=useIsOffline()

import { useEffect, useState } from "react";

const useIsOffline = () => {

  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  useEffect(()=>{
    const goOffline = () => {
      setIsOffline(true);
    }

    const goOnline = () => {
  
      setIsOffline(false)
    }

    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);
    return() =>  {
      window.removeEventListener('offline', goOffline)
      window.removeEventListener('online', goOnline);
}
  })
  return isOffline;
};

export default useIsOffline;
