const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const inputs = fs.readFileSync(filePath).toString().split("\n");

const [M, N, H] = inputs[0].split(" ").map(Number);
const board = Array.from(Array(H), () =>
  Array.from(Array(N), () => Array.from(Array(M).fill(0)))
);
const queue = [];
let answer = 0;
let unripeTomato = 0;
let inputIndex = 1;
for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    board[i][j] = inputs[inputIndex++].split(" ").map(Number);
  }
}

for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (board[i][j][k] == 0) unripeTomato++;
      if (board[i][j][k] == 1) queue.push([i, j, k, 0]);
    }
  }
}

const directions = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];
function isValid(nz, nx, ny) {
  return nx >= 0 && nx < N && ny >= 0 && ny < M && nz >= 0 && nz < H;
}

let head = 0;
while (head < queue.length) {
  const [z, x, y, days] = queue[head++];
  for (let [dz, dx, dy] of directions) {
    const nz = dz + z;
    const nx = dx + x;
    const ny = dy + y;
    if (isValid(nz, nx, ny) && board[nz][nx][ny] === 0) {
      board[nz][nx][ny] = 1;
      queue.push([nz, nx, ny, days + 1]);
      unripeTomato--;
    }
  }
  answer = days;
}

console.log(unripeTomato ? -1 : answer);
