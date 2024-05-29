const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const [m, n, k] = input[0].split(" ").map(Number);

const board = Array.from({ length: m }, () => Array(n).fill(0));
const visited = Array.from({ length: m }, () => Array(n).fill(0));

for (let i = 1; i <= k; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);

  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      board[y][x] = 1;
    }
  }
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function bfs(x, y) {
  let queue = [[x, y]];
  visited[y][x] = 1;
  let area = 1;

  while (queue.length) {
    const [ox, oy] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = ox + dx[i];
      const ny = oy + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (visited[ny][nx] === 1 || board[ny][nx] === 1) continue;

      visited[ny][nx] = 1;
      queue.push([nx, ny]);
      area++;
    }
  }

  return area;
}

const areas = [];

for (let y = 0; y < m; y++) {
  for (let x = 0; x < n; x++) {
    if (visited[y][x] === 0 && board[y][x] === 0) {
      areas.push(bfs(x, y));
    }
  }
}

console.log(areas.length);
console.log(areas.sort((a, b) => a - b).join(" "));
