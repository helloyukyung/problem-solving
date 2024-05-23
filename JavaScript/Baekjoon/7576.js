const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");

const inputs = fs.readFileSync(filePath).toString().split("\n");

const [m, n] = inputs[0].split(" ").map(Number);
const board = inputs.slice(1).map((input) => input.split(" ").map(Number));

const queue = [];

for (let y = 0; y < n; y++) {
  for (let x = 0; x < m; x++) {
    if (board[y][x] === 1) {
      queue.push(x, y);
    }
  }
}

let result = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 0, days = 1; i < queue.length; days++) {
  for (const { length } = queue; i < length; ) {
    const ox = queue[i++];
    const oy = queue[i++];

    for (let j = 0; j < 4; j++) {
      const x = ox + dx[j];
      const y = oy + dy[j];
      if (x < 0 || x >= m || y < 0 || y >= n) continue;
      if (board[y][x] !== 0) continue;
      board[y][x] = 1;
      result = days;
      queue.push(x, y);
    }
  }
}

for (let y = 0; y < n; y++) {
  for (let x = 0; x < m; x++) {
    if (board[y][x] === 0) result = -1;
  }
}

console.log(result);
