import { useState } from "react";
import { Puzzle } from "./components/Puzzle";
function App() {
  const [startResolveProblem, setStartResolveProblem] = useState(false);
  return (
    <>
      <div className="bg-[rgb(15,23,42)] w-[100%] h-[100vh] flex flex-col items-center text-white">
        <h1 className="block text-[40px] mt-10">Algoritmo Puzzle</h1>
        <div className="flex flex-row gap-20 m-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="block text-[20px] ">Estado Incial</h1>
            <Puzzle values={["_", 8, 2, 1, 4, 3, 7, 6, 5]} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="block text-[20px]">Estado Final</h1>
            <Puzzle values={[1, 2, 3, 4, 5, 6, 7, 8, "_"]} />
          </div>
        </div>
        <div>
          <button className="bg-[rgb(30,41,59)] p-3 rounded-md hover:bg-[rgb(42,58,83)]">
            Resolver
          </button>
        </div>
        {startResolveProblem && (
          <div>
            <h1 className="block text-[20px]">Resolução:</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
