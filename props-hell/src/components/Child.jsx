import GrandChild from "./GrandChild";

const Child = () => {
  return (
    <div>
      <div className="w-40 h-40 bg-purple-300">Child</div>
      <GrandChild />
    </div>
  );
};

export default Child;
