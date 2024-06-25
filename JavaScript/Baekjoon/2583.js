const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const [m, n, k] = input[0].split(" ").map(Number);

const board = Array.from({ length: m }, () => Array(n).fill(0));
const visited = Array.from({ length: m }, () => Array(n).fill(0));

for (let i = 1; i <= k; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  for (let x = x1; x < x2; x++) {
    for (let y = y1; y < y2; y++) {
      board[y][x] = 1;
    }
  }
}

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

let answer = [];

function isValid(x, y) {
  return x >= 0 && x < m && y >= 0 && y < n;
}

function bfs(x, y) {
  let cnt = 1;
  let head = 0;
  while (head < queue.length) {
    const [x, y] = queue[head++];
    for (let [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (isValid(nx, ny) && !visited[nx][ny] && !board[nx][ny]) {
        visited[nx][ny] = 1;
        queue.push([nx, ny]);
        cnt++;
      }
    }
  }

  return cnt;
}

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j] && !board[i][j]) {
      queue = [[i, j]];
      visited[i][j] = 1;
      answer.push(bfs(i, j));
    }
  }
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join(" "));
