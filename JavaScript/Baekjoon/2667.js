const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());

const map = input.map((element) => {
  return element
    .trim()
    .split("")
    .map((element) => Number(element));
});
const visited = [];
for (let i = 0; i < N; i++) {
  visited.push(new Array(N).fill(0));
}

const moveRow = [0, 0, 1, -1];
const moveCol = [1, -1, 0, 0];

const rangeCheck = (row, col) => {
  if (row >= 0 && row < N && col >= 0 && col < N) {
    return true;
  } else return false;
};

function bfs(row, col) {
  const queue = [];
  queue.push([row, col]);
  while (queue.length) {
    const [row, col] = queue.shift();

    if (visited[row][col] === 0) {
      visited[row][col] = 1;
      number++;
      for (let n = 0; n < 4; n++) {
        if (
          rangeCheck(row + moveRow[n], col + moveCol[n]) &&
          map[row + moveRow[n]][col + moveCol[n]] === 1
        ) {
          queue.push([row + moveRow[n], col + moveCol[n]]);
        }
      }
    }
  }
}

const complex = [];
let number = 0;

for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    if (Number(map[row][col]) === 1 && visited[row][col] === 0) {
      bfs(row, col);
      complex.push(number);
      number = 0;
    }
  }
}

complex.sort((a, b) => a - b);
const answer = [complex.length, ...complex];

console.log(answer.join("\n"));
