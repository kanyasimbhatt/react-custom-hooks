import { useEffect, useRef, useState } from "react";

const useToolTip = (ref: React.RefObject<HTMLButtonElement | null>) => {
  const ComponentToReturn = () => {
    const textReference = useRef<HTMLDivElement>(null);
    const [showText, setShowText] = useState(false);

    const handleMouseHover = () => {
      setShowText(true);
    };

    const handleMouseLeave = () => {
      setShowText(false);
    };

    useEffect(() => {
      if (!textReference.current || !ref.current) return;

      const buttonReference = ref.current as HTMLButtonElement;
      const { top } = buttonReference.getBoundingClientRect();
      (ref.current as HTMLButtonElement).style.position = "relative";
      textReference.current.style.top = `${top + 560}px`;

      buttonReference.addEventListener("mouseenter", handleMouseHover);
      buttonReference.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        buttonReference.removeEventListener("mouseenter", handleMouseHover);
        buttonReference.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);

    return (
      <>
        <div ref={textReference} style={{ position: "absolute" }}>
          {showText && "Hello this is hoverable text"}
        </div>
      </>
    );
  };

  return ComponentToReturn;
};

export default useToolTip;
