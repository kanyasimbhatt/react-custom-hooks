// Create a custom React hook called useScrollSpy that:
// Accepts an array of section IDs (e.g. ['#home', '#about', '#contact'])
// Returns the ID of the section currently visible in the viewport
// Supports an optional offset for sticky headers
// Then, use it in a component to render a fixed navbar that highlights the link for the section currently in view while scrolling.

import { useEffect, useState } from "react";

// const sections = ['#home', '#about', '#contact']
// const activeId = useScrollSpy(sections, 100); // 100px offset for sticky nav
// Expected behavior:
// As the user scrolls through the page, the corresponding nav item updates to indicate the active section.

const useScrollSpy = (sectionIds: string[]) => {
  const [visibleSection, setVisibleSection] = useState<string>();

  const handleScroll = () => {
    let visibleSection: string = "";
    sectionIds.map((sections: string) => {
      const element = document.querySelector(sections);
      if (!element) throw new Error("This particular element does not exist");
      const rect = element.getBoundingClientRect();

      const condition =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth);

      if (condition) visibleSection = sections;
    });

    return visibleSection;
  };

  const handleScrollChange = () => {
    setVisibleSection(handleScroll());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollChange);
    return () => {
      window.removeEventListener("scroll", handleScrollChange);
    };
  }, []);

  return visibleSection;
};

export default useScrollSpy;
