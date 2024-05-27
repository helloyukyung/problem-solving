const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const T = input.shift();

for (let i = 0; i < T; i++) {
  const n = parseInt(input.shift());
  const arr = input.shift().split(" ").map(Number);
  const board = Array.from({ length: n + 1 }, () => 0);
  const visited = Array.from({ length: n + 1 }, () => false);
  const done = Array.from({ length: n + 1 }, () => false);

  for (let j = 1; j <= n; j++) {
    board[j] = arr[j - 1];
  }

  let result = 0;

  for (let j = 1; j <= n; j++) {
    if (!visited[j]) {
      dfs(j);
    }
  }

  console.log(n - result);

  function dfs(x) {
    visited[x] = true;
    const nx = board[x];

    if (!visited[nx]) {
      dfs(nx);
    } else {
      if (!done[nx]) {
        for (let i = nx; i !== x; i = board[i]) {
          result++;
        }
        result++;
      }
    }
    done[x] = true;
  }
}
