import { useContext } from "react";
import { AppContext } from "../App";

const UltraSuperGrandChild = () => {
  const { gift, setGift } = useContext(AppContext);

  return (
    <div>
      <div className="w-40 h-40 bg-blue-300">UltraSuperGrandChild : {gift}</div>
      <button
        className="bg-red-300 text-white px-4 py-2 rounded-lg"
        onClick={() => setGift(gift + 1)}
      >
        증가
      </button>
    </div>
  );
};

export default UltraSuperGrandChild;
