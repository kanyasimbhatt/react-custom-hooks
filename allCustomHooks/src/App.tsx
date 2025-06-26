// -----------------------------------usePreviousValue------------------------
// const App = () => {
//   const [color, setColor] = useState<string>("black");
//   const previousValue: string | null = usePreviousValue<string>(color);
//   console.log(previousValue);
//   return (
//     <>
//       <p>{color}</p>
//       <p>{previousValue}</p>
//       <input
//         value={color}
//         type="color"
//         onChange={(event) => setColor(event.target.value)}
//       />
//       <button type="button" onClick={() => setColor("purple")}>
//         Change Color
//       </button>
//     </>
//   );
// };

// export default App;

import "./App.css";
import useScrollSpy from "./Hooks/useScrollSpy";

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

//-----------------------useEffectSkipFirst---------------------------------

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

//-------------------------useRenderCount---------------------------------------

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

//-----------------------------useLongPressToAccelarate------------------------

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

//------------------------------------useSkipEffect---------------------------

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

//--------------------------useIdle------------------------------------------------------

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

//--------------------------------------useProgressiveReveal----------------------------------------

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

//------------------------------useReactiveIdle----------------------------------------

// const App = () => {
//   const callback = () => {
//     console.log("hello");
//   };

//   useReactiveIdle(callback, [1000, 500, 250, 12]);

//   return <div>App</div>;
// };

//----------------------------------useFirstRender---------------------------------------

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

//------------------------------useLoopUntil-------------------------------------------------

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

//----------------------------------usePredictiveInput-------------------------------------------

// const previousInputs = [
//   "apple",
//   "pineapple",
//   "lichi",
//   "mango",
//   "banana",
//   "orange",
// ];
// const App = () => {
//   const { suggestions, updateInput } = usePredictiveInput(previousInputs);
//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(event) => updateInput(event.target.value)}
//       />
//       {suggestions.map((suggestion, index) => (
//         <p key={index}>{suggestion}</p>
//       ))}
//     </div>
//   );
// };

//----------------------------------useDelayedHoverIntent----------------------------

// const App = () => {
//   const callback = () => {
//     console.log("still hovering!");
//   };
//   const ref = useDelayedHoverIntent<HTMLButtonElement>(callback, 3000);
//   return (
//     <div>
//       <button ref={ref}>Helloooo</button>
//     </div>
//   );
// };

//-----------------------------------usePreviousLocation-------------------------------

// const App = () => {
//   const location = usePreviousLocation();
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/dashboard" element={<Dashboard location={location} />} />
//     </Routes>
//   );
// };

// const Home = () => {
//   const navigate = useNavigate();
//   return (
//     <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
//   );
// };

// const Dashboard = ({ location }: { location: string }) => {
//   const navigate = useNavigate();

//   return <button onClick={() => navigate(location)}>Go Back</button>;
// };

//---------------------------useMediaQuery-----------------------------------------

// import { useMediaQuery } from "@mui/material";

// const App = () => {
//   const matches = useMediaQuery("(max-width: 500px)");
//   return <div>{matches ? "MATCHED" : "NOT MATCHED"}</div>;
// };

// export default App;

//--------------------useShortCut-------------------------------------------------

// const App = () => {
//   useShortCut({
//     ctrl: true,
//     shift: true,
//     key: "A",
//     callback: () => console.log("shortcut pressed HI"),
//   });
//   return <div>App</div>;
// };

// export default App;

//--------------------------------------useClickOnOutside----------------------------------

// const App = () => {
//   const ref = useRef(null);
//   useClickOnOutside(ref, () => console.log("click Outside"));
//   return (
//     <div>
//       <button ref={ref}>Hello world</button>
//     </div>
//   );
// };

// export default App;

//------------------------------useToolTip----------------------------------------

// const App = () => {
//   const ref = useRef<HTMLButtonElement>(null);
//   const Element = useToolTip(ref);

//   return (
//     <div>
//       <button ref={ref} style={{ marginTop: "30px" }}>
//         Click Me
//       </button>
//       <Element />
//     </div>
//   );
// };

// export default App;

//-----------------------------------useScrollSpy-----------------------------------------------------
const App = () => {
  const sectionVisible = useScrollSpy(
    ["#home", "#section1", "#section2", "#section3"],
    50
  );

  return (
    <div>
      <nav className="navbar">
        <button
          style={
            sectionVisible === "#home"
              ? { backgroundColor: "pink" }
              : { backgroundColor: "white" }
          }
        >
          Home
        </button>
        <button
          style={
            sectionVisible === "#section1"
              ? { backgroundColor: "pink" }
              : { backgroundColor: "white" }
          }
        >
          Section1
        </button>
        <button
          style={
            sectionVisible === "#section2"
              ? { backgroundColor: "pink" }
              : { backgroundColor: "white" }
          }
        >
          Section2
        </button>
        <button
          style={
            sectionVisible === "#section3"
              ? { backgroundColor: "pink" }
              : { backgroundColor: "white" }
          }
        >
          Section3
        </button>
      </nav>

      <div
        id="home"
        className="main-body"
        style={{
          height: "100vh",

          border: "1px solid pink",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Home
      </div>
      <div
        id="section1"
        style={{
          height: "100vh",
          border: "1px solid purple",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Section1
      </div>
      <div
        id="section2"
        style={{
          height: "100vh",
          border: "1px solid gray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Section2
      </div>
      <div
        id="section3"
        style={{
          height: "100vh",
          border: "1px solid yellow",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Section3
      </div>
    </div>
  );
};

export default App;

//-----------------------------useTablePagination------------------------------------

// const App = () => {
//   const {
//     currentPage,
//     pageSize,
//     startIndex,
//     endIndex,
//     setCurrentPage,
//     updatePageSize,
//   } = useTablePagination(5);
//   const data = [
//     { id: 1, name: "item1" },
//     { id: 2, name: "item2" },
//     { id: 3, name: "item3" },
//     { id: 4, name: "item4" },
//     { id: 5, name: "item5" },
//     { id: 6, name: "item6" },
//     { id: 7, name: "item7" },
//     { id: 8, name: "item8" },
//     { id: 9, name: "item9" },
//     { id: 10, name: "item10" },
//   ];
//   const paginatedData = data.slice(startIndex, endIndex);
//   return (
//     <div>
//       <table>
//         <tbody>
//           {paginatedData.map((item) => (
//             <tr key={item.id}>
//               <td>{item.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div>
//         <button
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <span>Page {currentPage}</span>
//         <button
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={endIndex >= data.length}
//         >
//           Next
//         </button>
//       </div>
//       <select
//         value={pageSize}
//         onChange={(e) => updatePageSize(Number(e.target.value))}
//       >
//         <option value={5}>5</option>
//         <option value={10}>10</option>
//         <option value={25}>25</option>
//       </select>
//     </div>
//   );
// };

// export default App;
