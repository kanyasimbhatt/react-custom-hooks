import useResetState from "./Hooks/useResetState";
export default function App() {
  const [value, setValue, reset] = useResetState(0);

  return (
    <>
      {value}
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
}
