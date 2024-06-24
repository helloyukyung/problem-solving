const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input.shift());

const graph = input.map((val) => val.split(""));
const visited = Array.from(Array(N), () => Array(N).fill(false));

const queue = [];
const directions = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
];

let colorBlindness = 0;
let normal = 0;

// 적록색약이 아닌 사람
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      visited[i][j] = true;
      queue.push([i, j, graph[i][j]]);
      bfs();
      normal += 1;
    }
  }
}

// 적록색약인 사람
visited.forEach((val, i) => val.fill(false));
queue.length = 0;

graph.forEach((val, i) => {
  graph[i] = val.map((v) => (v === "G" ? "R" : v));
});

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      visited[i][j] = true;
      queue.push([i, j, graph[i][j]]);
      bfs();
      colorBlindness += 1;
    }
  }
}

function isValid(y, x) {
  return x >= 0 && x < N && y >= 0 && y < N;
}

function bfs() {
  let head = 0;
  while (head < queue.length) {
    const [y, x, color] = queue[head++];
    for (let [dy, dx] of directions) {
      const nx = dx + x;
      const ny = dy + y;
      if (isValid(ny, nx) && !visited[ny][nx] && graph[ny][nx] === color) {
        visited[ny][nx] = true;
        queue.push([ny, nx, color]);
      }
    }
  }
}

console.log(normal, colorBlindness);
