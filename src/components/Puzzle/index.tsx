import React from "react";

export function Puzzle({ values }: any) {
  return (
    <>
      <div className="flex max-w-[200px] flex-wrap justify-center items-center">
        {values.map((value: any, index: any) => (
          <div
            className="w-[40px] h-[40px] bg-[rgb(30,41,59)] flex items-center justify-center m-2 rounded-sm"
            key={index}
          >
            {value}
          </div>
        ))}
      </div>
    </>
  );
}
