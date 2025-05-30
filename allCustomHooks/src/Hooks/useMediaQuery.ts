import { useEffect, useState } from "react";

export const useMediaQuery = (media: string) => {
  const matchedMedia = window.matchMedia(media);

  const [isMatched, setIsMatched] = useState<boolean>(matchedMedia.matches);
  useEffect(() => {
    matchedMedia.addEventListener("change", () => {
      if (matchedMedia.matches) setIsMatched(true);
      else setIsMatched(false);
    });
  }, []);

  return isMatched;
};
