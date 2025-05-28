import useUndoRedo from "./Hooks/useUndoRedo";

const App = () => {
  const [value, setData, undo, redo] = useUndoRedo<number>(0);

  return (
    <>
      <p>{value}</p>
      <button onClick={() => setData(value + 1)}>Set Data</button>
      <button onClick={() => undo()}>Undo</button>
      <button onClick={() => redo()}>Redo</button>
    </>
  );
};

export default App;
