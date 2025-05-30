
import useIsOffline from "./Hooks/useIsOffline";

const App = () => {
  
  const value = useIsOffline();
 
  return (
    <>
      {value ? 'OFFLINE' : "ONLINE"}
    </>
  );
};

export default App;
