const GameResult = () => {
  const point = localStorage.getItem("point") | 0;

  return (
    <div className="bg-pink-300 w-full grow flex flex-col justify-center items-center text-white pb-8 shadow-pink-300 shadow-lg">
      <div className="text-8xl font-black">Up & Down</div>
      <div className="text-2xl mt-12">현재 점수 : {point}</div>
    </div>
  );
};

export default GameResult;
