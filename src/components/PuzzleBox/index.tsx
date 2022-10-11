import React from "react";

export function PuzzleBox({ values }: any) {
  return (
    <>
      {values.length > 3 ? (
        <div className="flex flex-wrap items-center justify-center gap-4">
          {values.map((value: any, index: any) => {
            if (value === "Cima") {
              return (
                <div>
                  Cima ↑
                  <br />
                </div>
              );
            } else if (value === "Baixo") {
              return "Baixo ↓";
            } else if (value === "Direita") {
              return "Direita →";
            } else if (value === "Esquerda") {
              return "Esquerda ←";
            } else if (value.includes("Total")) {
              return <div className="mr-3">{value}</div>;
            } else if (value.includes("Tempo")) {
              return <div className="">{value}</div>;
            } else {
              return (
                <>
                  <div className="flex max-w-[200px] flex-wrap justify-center items-center">
                    {value.map((element: any, index: any) => {
                      return element.map((number: any, index: any) => {
                        // console.log("value: ", value);
                        return (
                          <div
                            className="bg-[rgb(30,41,59)] w-[50px] h-[50px] flex justify-center items-center text-[20px] m-1"
                            key={index}
                          >
                            {number}
                          </div>
                        );
                      });
                    })}
                  </div>
                </>
              );
            }
          })}
        </div>
      ) : (
        <>
          <div className="flex max-w-[200px] flex-wrap justify-center items-center">
            {values.map((value: any, index: any) => {
              return value.map((value: any, index: any) => {
                // console.log("value: ", value);
                return (
                  <div
                    className="bg-[rgb(30,41,59)] w-[50px] h-[50px] flex justify-center items-center text-[20px] m-1"
                    key={index}
                  >
                    {value}
                  </div>
                );
              });
            })}
          </div>
        </>
      )}
    </>
  );
}
