const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const board = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
let ans = [];

function bfs() {
  const queue = [[0, 0]];
  const visited = Array.from({ length: n }, () => Array(m).fill(0));
  visited[0][0] = 1;
  let count = 0;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 0) {
        if (board[nx][ny] === 0) {
          visited[nx][ny] = 1;
          queue.push([nx, ny]);
        } else if (board[nx][ny] === 1) {
          board[nx][ny] = 0;
          visited[nx][ny] = 1;
          count++;
        }
      }
    }
  }
  ans.push(count);
  return count;
}

let time = 0;
while (true) {
  time += 1;
  const cnt = bfs();
  if (cnt === 0) {
    break;
  }
}

console.log(time - 1);
console.log(ans[ans.length - 2]); // Accessing the second last element
