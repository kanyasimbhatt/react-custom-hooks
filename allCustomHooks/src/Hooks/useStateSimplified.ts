// import App from "../App";

// export const hookStates: { type: string; current: unknown | unknown[] }[] = [];
// export let hookIndex = 0;

// export function useState<T>(initialValue: T) {
//   const currentIndex = hookIndex;

//   // Initialize the state if it's the first time this hook is run
//   hookStates[currentIndex] = hookStates[currentIndex] || {
//     type: "useState",
//     current: initialValue,
//   };

//   // Update hook index for the next hook call
//   hookIndex++;

//   // Function to update state and re-render
//   const setState = (newValue: unknown) => {
//     hookStates[currentIndex] =
//       typeof newValue === "function"
//         ? newValue(hookStates[currentIndex])
//         : newValue;
//     render(); // Re-render the component
//   };

//   return [hookStates[currentIndex], setState];
// }

// function render() {
//   hookIndex = 0;
//   App(); // Rerun the component to simulate re-rendering
// }
