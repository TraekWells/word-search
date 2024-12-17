import React from "react";
import Cell from "./Cell/Cell";

const Game = () => {
  const cellsPerRow = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div className="word-search">
      {cellsPerRow.map((cell) => {
        return (
          <div
            className="row"
            key={cell}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cellsPerRow.length}, 1fr)`,
            }}
          >
            {cellsPerRow.map((cell) => {
              return <Cell key={cell} letter="a" />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Game;
