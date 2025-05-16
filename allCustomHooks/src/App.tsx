import useUndoRedo from "./Hooks/useUndoRedo";

export type Array<T> = [T, (value1: T) => void, () => void, () => void];

export default function App() {
  const [value, setData, undo, redo]: Array<number> = useUndoRedo<number>(10);

  return (
    <>
      <p>{value}</p>
      <button onClick={() => setData(value + 1)}>update</button>
      <button onClick={() => undo()}>Undo</button>
      <button onClick={() => redo()}>Redo</button>
    </>
  );
}
