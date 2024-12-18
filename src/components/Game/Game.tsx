import React from "react";
import Cell from "../Cell/Cell";
import { generateRandomLetter } from "../../helpers/helpers";

const cellsPerRow = 15;
const words = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];

const generateGrid = () => {
  const grid = Array.from({ length: cellsPerRow }, () =>
    Array.from({ length: cellsPerRow }, () => "")
  );

  const placeWord = (word: string) => {
    const direction = Math.random() > 0.5 ? "horizontal" : "vertical";
    let placed = false;

    while (!placed) {
      const row = Math.floor(Math.random() * cellsPerRow);
      const col = Math.floor(Math.random() * cellsPerRow);

      if (direction === "horizontal" && col + word.length <= cellsPerRow) {
        if (
          grid[row].slice(col, col + word.length).every((cell) => cell === "")
        ) {
          for (let i = 0; i < word.length; i++) {
            grid[row][col + i] = word[i];
          }
          placed = true;
        }
      } else if (direction === "vertical" && row + word.length <= cellsPerRow) {
        if (
          grid.slice(row, row + word.length).every((row) => row[col] === "")
        ) {
          for (let i = 0; i < word.length; i++) {
            grid[row + i][col] = word[i];
          }
          placed = true;
        }
      }
    }
  };

  words.forEach((word) => placeWord(word));

  for (let row = 0; row < cellsPerRow; row++) {
    for (let col = 0; col < cellsPerRow; col++) {
      if (grid[row][col] === "") {
        grid[row][col] = generateRandomLetter();
      }
    }
  }

  return grid;
};

const Game = () => {
  const [grid, setGrid] = React.useState<string[][]>([]);

  React.useEffect(() => {
    setGrid(generateGrid());
  }, []);

  return (
    <div className="word-search">
      {grid.map((row: string[], rowIndex: number) => (
        <div
          className="row"
          key={rowIndex}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cellsPerRow}, 1fr)`,
          }}
        >
          {row.map((cell: string, cellIndex: number) => (
            <Cell key={cellIndex} letter={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Game;
