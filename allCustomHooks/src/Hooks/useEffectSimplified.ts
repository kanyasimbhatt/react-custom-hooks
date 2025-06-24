// import { hookIndex, hookStates } from "./useStateSimplified";

// export function useEffect(callback: () => void, dependencies: unknown[]) {
//   const currentIndex = hookIndex;
//   const previousDependencies: { type: string; current: unknown } =
//     hookStates[currentIndex];

//   // Check if dependencies have changed
//   let hasChanged = true;
//   if (previousDependencies) {
//     hasChanged = dependencies.some(
//       (dep, i) => dep !== (previousDependencies.current as unknown[])[i]
//     );
//   }

//   if (hasChanged) {
//     // Run cleanup function if it exists
//     if (hookStates[currentIndex] && hookStates[currentIndex].cleanup) {
//       hookStates[currentIndex].cleanup();
//     }

//     // Run the effect and store the cleanup function
//     const cleanup = callback();
//     hookStates[currentIndex] = { dependencies, cleanup };
//   }

//   hookIndex++;
// }
