
import { Ref, useRef } from "react";
import useDebounce from "./Hooks/useDebounce"
function App() {
  let store = useRef<HTMLInputElement | null>(null);
  let [handleDebounce] = useDebounce(handleInput, 3000);

  function handleInput(){
      console.log(store.current!.value);
  }
  return (
    <>
    <input type="text" ref={store} onInput={handleDebounce}/>
    </>
  )
}

export default App
