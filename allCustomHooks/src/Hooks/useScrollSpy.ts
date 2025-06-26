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

const useScrollSpy = (sectionIds: string[], offset = 0) => {
  const [visibleSection, setVisibleSection] = useState<string>();

  const handleScroll = () => {
    let visibleSection: string = "";
    sectionIds.map((sections: string) => {
      const element: HTMLElement | null = document.querySelector(sections);
      if (!element) throw new Error("This particular element does not exist");

      const condition = window.scrollY + offset >= element.offsetTop;
      if (condition) visibleSection = sections;
    });

    setVisibleSection(visibleSection);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return visibleSection;
};

export default useScrollSpy;
