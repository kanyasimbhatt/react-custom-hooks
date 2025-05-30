import { useState } from "react";
import Child from "./Components/Child";
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
//   const ref = useEventListener<HTMLInputElement>("input", () =>
//     console.log("changed")
//   );
//   return <input type="text" ref={ref} />;
// };

// const App = () => {
//   const isMatched = useMediaQuery("(min-width: 768px)");
//   return <div>{isMatched ? "True" : "False"}</div>;
// };

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Child value={count} />
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  );
};

export default App;
