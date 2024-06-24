const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let board = input.slice(1).map((v) => v.split("").map(Number));
const visited = Array.from(Array(N), () => Array(M).fill(false));
const queue = [];

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

let answer = 0;

const isValid = (x, y) => x >= 0 && x < N && y >= 0 && y < M;

queue.push([0, 0, 1, 0]);
visited[0][0] = true;

let head = 0;
while (head < queue.length) {
  let [x, y, jump, isBreak] = queue[head++];
  if (x === N - 1 && y === M - 1) {
    answer = jump;
    break;
  }

  for (let [dx, dy] of directions) {
    let nx = x + dx;
    let ny = y + dy;

    if (isValid(nx, ny)) {
      if (board[nx][ny] === 0 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, jump + 1, isBreak]);
      } else if (board[nx][ny] === 1 && !isBreak) {
        visited[nx][ny] = true;
        queue.push([nx, ny, jump + 1, 1]);
      }
    }
  }
}

console.log(answer === 0 ? -1 : answer);
