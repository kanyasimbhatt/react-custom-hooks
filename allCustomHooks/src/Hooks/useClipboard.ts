import { useState } from "react";

// useClipboard: This hook allows you to copy text to the clipboard and track whether the text was successfully copied.

// const { copy, isCopied } = useClipboard();

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [data, setData] = useState("");

  const copyData = (data: string) => {
    navigator.clipboard
      .writeText(data)
      .then(() => console.log("data copied successfully"))
      .catch((err) => console.log(err));

    setIsCopied(true);
    setData(data);
  };

  document.addEventListener("mouseup", () => {
    const data = window.getSelection();
    copyData(data!.toString());
  });

  return [data.toString(), isCopied] as const;
};

export default useClipboard;
