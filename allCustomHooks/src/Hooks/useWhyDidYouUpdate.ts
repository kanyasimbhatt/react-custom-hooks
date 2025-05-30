// 🧠 10. useWhyDidYouUpdate
// Problem: Log prop changes for a component — helpful for debugging.
// useWhyDidYouUpdate("MyComponent", props);

import { useEffect } from "react";

export const useWhyDidYouUpdate = <T>(componentName: string, props: T) => {
  useEffect(() => {
    console.log(`Props in the ${componentName} have changed`);
    console.log(props);
  }, [props]);
};
