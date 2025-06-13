// 🧠 Idea:
// Simulates a predictive input experience (like smart auto-suggestion based on past entries).
// 🔧 Description:
// • Accepts a history of past values.
// • Suggests input as user types.
// • Returns predicted value and controls.

import { useState } from "react";

// const { suggestion, updateInput } = usePredictiveInput(pastValues);

const usePredictiveInput = (pastValues: string[]) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const updateInput = (value: string) => {
    const array = pastValues.filter((past) => past.includes(value));
    setSuggestions(array);
  };

  return { suggestions, updateInput };
};

export default usePredictiveInput;
