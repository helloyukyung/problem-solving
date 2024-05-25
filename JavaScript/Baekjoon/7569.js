const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const inputs = fs.readFileSync(filePath).toString().split("\n");

const [M, N, H] = inputs[0].split(" ").map(Number);
const board = Array.from(Array(H), () =>
  Array.from(Array(N), () => Array.from(Array(M).fill(0)))
);

for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    board[i][j] = inputs.shift().split(" ").map(Number);
  }
}
const queue = [];
let unripeTomato = 0;

for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (board[i][j][k] == 0) unripeTomato++;
      if (board[i][j][k] == 1) queue.push([i, j, k, 0]);
    }
  }
}
const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];

let answer = 0;
while (queue.length > 0) {
  const [z, x, y, days] = queue.shift();

  for (let i = 0; i < 6; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    const nz = z + dz[i];
    if (
      nz >= 0 &&
      nz < H &&
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < M &&
      board[nz][nx][ny] === 0
    ) {
      board[nz][nx][ny] = 1;
      queue.push([nz, nx, ny, days + 1]);
      unripeTomato--; // 안 익은 토마토 개수 감소
    }
  }
  answer = days;
}
console.log(unripeTomato ? -1 : answer);
