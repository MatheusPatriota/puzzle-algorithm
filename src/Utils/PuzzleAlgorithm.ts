/**
 * [
 *   [_,8,2],
 *   [1,4,3],
 *   [7,6,5]
 * ]
 *
 */

export const findIndex = (arr: any, value: any) => {
  const indexOfValue = arr.indexOf(value);
  const i = indexOfValue;
  const j = indexOfValue - i * 3;

  return [i, j];
};

function getKeyByValue(object: any, value: any) {
  return Object.keys(object).find((key) => object[key] === value);
}

export const possibleDirections = (arr: any) => {
  // input [_,1,2,3,4,5,6,7,8]
  const [i, j] = findIndex(arr, "_");

  // find possible direction to move the blank tile
  const map = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let result: any = [];

  // create a dictionary of possible directions
  const directions = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1],
  };

  // check if the blank tile can move in a certain direction
  map.forEach((dir) => {
    if (
      !(i + dir[0] < 0) ||
      !(i + dir[0] > 2) ||
      !(j + dir[1] < 0) ||
      !(j + dir[1] > 2)
    ) {
      const selectedDirection = getKeyByValue(directions, dir);

      result.push(selectedDirection);
    }
  });

  return result;
};

export const score = (puzzleArray: any, arrayGoal: any) => {
  let score = 0;

  for (let index = 0; index < puzzleArray.length; index++) {
    const [i, j] = findIndex(puzzleArray, puzzleArray[index]);
    const [x, y] = findIndex(arrayGoal, puzzleArray[index]);

    let h = Math.abs(i - x) + Math.abs(j - y);
    score += h;
  }
  return score;
};
