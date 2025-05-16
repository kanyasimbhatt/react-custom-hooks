import useToggle from "./Hooks/useToggle";

export default function App() {
  const [value, setValue, toggle] = useToggle(true);

  return (
    <>
      {value && <p>Hello I am there</p>}
      <button onClick={() => setValue((toggle) => !toggle)}>change</button>
      <button onClick={() => toggle()}>Toggle</button>
    </>
  );
}
