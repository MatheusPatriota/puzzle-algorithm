import { useState } from "react";
import { PuzzleBox } from "./components/PuzzleBox";

function App() {
  const [startResolveProblem, setStartResolveProblem] = useState(false);
  const [response, setResponse] = useState();

  const separetePuzzleResponse = async () => {
    let array = [];
    let finalarray = [];
    await fetch("Result.txt")
      .then((response) => response.text())
      .then((text) => {
        array = text.split("\n");
        array.forEach((element) => {
          if (
            element === "Cima\r" ||
            element === "Baixo\r" ||
            element === "Direita\r" ||
            element === "Esquerda\r"
          ) {
            finalarray.push(element.replace("\r", ""));
          } else if (element.includes("Total") || element.includes("Tempo")) {
            finalarray.push(element.replace("\r", ""));
          } else {
            let auxiliar = [];
            for (let index = 0; index < element.length; index++) {
              if (
                !(
                  element[index] === "[" ||
                  element[index] === "]" ||
                  element[index] === "," ||
                  element[index] === "\r" ||
                  element[index] === " "
                )
              ) {
                auxiliar.push(element[index]);
              }
            }
            finalarray.push(auxiliar);
          }
        });
      });
    return finalarray;
  };

  const resolveProblem = async () => {
    setStartResolveProblem(true);
    let lista = [];
    let finalList = [];
    let contador = 0;
    let listaAux = [];
    await separetePuzzleResponse().then((response) => {
      lista = response;
    });

    for (let index = 0; index < lista.length; index++) {
      if (contador === 3) {
        finalList.push(listaAux);
        contador = 0;
        listaAux = [];
      }
      if (lista[index].length === 3) {
        listaAux.push(lista[index]);
        contador++;
      } else {
        finalList.push(lista[index]);
      }
    }
    setResponse(finalList);
  };

  return (
    <>
      <div className="bg-[rgb(15,23,42)] w-[100%] h-[100vh] flex flex-col items-center text-white">
        <h1 className="block text-[40px] mt-10">Algoritmo Puzzle</h1>
        <div className="flex flex-row gap-20 m-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="block text-[20px] ">Estado Incial</h1>
            <PuzzleBox
              values={[
                [0, 8, 2],
                [1, 4, 3],
                [7, 6, 5],
              ]}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="block text-[20px]">Estado Final</h1>
            <PuzzleBox
              values={[
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 0],
              ]}
            />
          </div>
        </div>
        <div>
          <button
            className="bg-[rgb(30,41,59)] p-3 rounded-md hover:bg-[rgb(42,58,83)]"
            onClick={() => resolveProblem()}
          >
            Resolver
          </button>
        </div>
        {startResolveProblem && (
          <>
            <div>
              <h1 className="block text-[20px]">Resolução:</h1>
            </div>
            <div className="flex gap-3 mt-5 flex-wrap items-center justify-center bg-[rgb(15,23,42)]">
              {response && <PuzzleBox values={response} />}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
