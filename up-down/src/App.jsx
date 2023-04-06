import { createContext, useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import GameResult from "./components/GameResult";

export const AppContext = createContext();

function App() {
  const [data, setData] = useState([]);

  const [point, setPoint] = useState(5);

  useEffect(() => {
    let savedPoint = localStorage.getItem("point");

    if (!savedPoint) {
      localStorage.setItem("point", 0);
    }
  }, []);

  return (
    <AppContext.Provider value={{ point, setPoint, data, setData }}>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <GameResult />
        <GameBoard />
      </div>
    </AppContext.Provider>
  );
}

export default App;
