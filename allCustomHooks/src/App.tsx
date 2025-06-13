import usePredictiveInput from "./Hooks/usePredictiveInput";

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

// const App = () => {
//   const renderCount = useRenderCount();
//   const [count, setCount] = useState(0);
//   console.log("sdfd");
//   return (
//     <div>
//       <p>{renderCount}</p>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// const App = () => {
//   const normalFunction = () => {
//     console.log("hello1");
//   };
//   const ref = useLongPressToAccelarate<HTMLButtonElement>(normalFunction);
//   return (
//     <>
//       <button ref={ref} type="button">
//         Click me
//       </button>
//     </>
//   );
// };

// const App = () => {
//   const [count, setCount] = useState(0);
//   useSkipEffect(
//     (stop) => {
//       console.log("hello world");
//       if (count === 5) stop();
//       console.log("no hello world");
//     },
//     [count]
//   );
//   return (
//     <div>
//       {count}
//       <button type="button" onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//     </div>
//   );
// };

// const App = () => {
//   const isIdle = useIdle(5000);
//   return <div>{isIdle ? "You are Idle." : "You are not Idle"}</div>;
// };

// const App = () => {
//   return (
//     <div>
//       <Parent />
//     </div>
//   );
// };

// const items = [
//   "kanya",
//   "pranshu",
//   "nikhil",
//   "mohit",
//   "inshiya",
//   "raja",
//   "dhruv",
//   "krushna",
//   "sakshi",
//   "maitri",
// ];
// const App = () => {
//   const [iteratedItems, triggerFunc] = useProgressiveReveal(items, {
//     step: 3,
//     delay: 1000,
//   });
//   return (
//     <ul>
//       <button onClick={() => triggerFunc()}>Trigger</button>
//       {iteratedItems.map((item, index) => (
//         <li key={index}>item: {item}</li>
//       ))}
//     </ul>
//   );
// };

// const App = () => {
//   const callback = () => {
//     console.log("hello");
//   };

//   useReactiveIdle(callback, [1000, 500, 250, 12]);

//   return <div>App</div>;
// };

// const App = () => {
//   const [count, setCount] = useState(0);
//   const isFirst = useFirstRender();

//   useEffect(() => {
//     if (isFirst) console.log("firstttt");
//     else console.log("not firstttt");
//   }, [count]);
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// const App = () => {
//   const flag = useRef(true);
//   useLoopUntil({
//     interval: 1000,
//     maxTime: 10000,
//     condition: () => flag.current,
//     onComplete: () => console.log("iteration"),
//   });
//   return (
//     <div>
//       <button onClick={() => (flag.current = false)}>Click Me</button>
//     </div>
//   );
// };

const previousInputs = [
  "apple",
  "pineapple",
  "lichi",
  "mango",
  "banana",
  "orange",
];
const App = () => {
  const { suggestions, updateInput } = usePredictiveInput(previousInputs);
  return (
    <div>
      <input
        type="text"
        onChange={(event) => updateInput(event.target.value)}
      />
      {suggestions.map((suggestion, index) => (
        <p key={index}>{suggestion}</p>
      ))}
    </div>
  );
};

export default App;
