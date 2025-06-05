import { useEffect, useState } from "react";

export const useMediaQuery = (media: string) => {
  const matchedMedia = window.matchMedia(media);

  const [isMatched, setIsMatched] = useState<boolean>(matchedMedia.matches);
  useEffect(() => {
    const handleChange = () => {
      if (matchedMedia.matches) setIsMatched(true);
      else setIsMatched(false);
    };
    matchedMedia.addEventListener("change", handleChange);

    return () => {
      matchedMedia.removeEventListener("change", handleChange);
    };
  }, []);

  return isMatched;
};
