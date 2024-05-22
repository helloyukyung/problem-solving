const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let board = input.slice(1).map((v) => v.split("").map(Number));
const check = Array.from(new Array(N), () => new Array());
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const queue = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    check[i][j] = new Array(2).fill(0);
  }
}

queue.push([0, 0, 0]);
check[0][0][0] = 1;

function BFS() {
  let idx = 0;

  while (idx !== queue.length) {
    const [y, x, isBreak] = queue[idx];

    if (x === M - 1 && y === N - 1) {
      return check[y][x][isBreak];
    }

    for (let i = 0; i < dx.length; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
        if (board[ny][nx] === 0 && check[ny][nx][isBreak] === 0) {
          check[ny][nx][isBreak] = check[y][x][isBreak] + 1;
          queue.push([ny, nx, isBreak]);
        } else if (board[ny][nx] === 1 && isBreak === 0) {
          check[ny][nx][isBreak + 1] = check[y][x][isBreak] + 1;
          queue.push([ny, nx, isBreak + 1]);
        }
      }
    }
    idx++;
  }

  return -1;
}

console.log(BFS());
