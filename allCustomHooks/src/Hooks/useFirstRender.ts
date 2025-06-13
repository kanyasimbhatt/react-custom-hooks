import { useEffect, useState } from "react";

const useFirstRender = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return isFirstRender;
};

export default useFirstRender;
