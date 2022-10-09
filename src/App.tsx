import { useState } from "react";
import { Puzzle } from "./components/Puzzle";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-800 w-[100%] h-[100vh] flex flex-col items-center text-white">
        <h1 className="block text-[40px] mt-10">Algoritmo Puzzle</h1>
        <div className="flex flex-row gap-20 m-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="block text-[20px] ">Estado Incial</h1>
            <Puzzle values={[0, 8, 2, 1, 4, 3, 7, 6, 5]} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="block text-[20px]">Estado Final</h1>
            <Puzzle values={[1, 2, 3, 4, 5, 6, 7, 8, 0]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
