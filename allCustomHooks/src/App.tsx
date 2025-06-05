import { useState } from "react";
import useRenderCount from "./Hooks/useRenderCount";
// const App = () => {
//   const [count, setCount] = useState<number>(0);
//   const previousValue: number | null = usePreviousValue<number>(count);
//   console.log(previousValue);
//   return (
//     <>
//       <p>{previousValue}</p>
//       <button onClick={() => setCount(count + 1)}>Set Data</button>
//     </>
//   );
// };

// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <Child value={count} />
//       <button type="button" onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </>
//   );
// };

// const App = () => {
//   const [count, setCount] = useState(0);
//   useEffectSkipFirst(() => {
//     console.log("heyyy");
//   }, [count]);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

const App = () => {
  const renderCount = useRenderCount();
  const [count, setCount] = useState(0);
  console.log("sdfd");
  return (
    <div>
      <p>{renderCount}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
