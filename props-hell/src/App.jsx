import { createContext, useState } from "react";
import Child from "./components/Child";
import ChildFriends from "./components/ChildFriends";

export const AppContext = createContext();

function App() {
  const [gift, setGift] = useState(3413413);

  return (
    <AppContext.Provider value={{ gift, setGift }}>
      <div className="bg-red-100">
        <Child />
        <ChildFriends />
      </div>
    </AppContext.Provider>
  );
}

export default App;
