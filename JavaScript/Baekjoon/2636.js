const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const board = input.slice(1).map((input) => input.split(" ").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function meltCheese() {
  function bfs() {
    let queue = [];
    let visited = Array.from({ length: n }, () => Array(m).fill(false));
    // 외부 공기와 접촉하는 0을 찾기 위해 가장자리에서 BFS 시작
    for (let i = 0; i < n; i++) {
      if (i === 0 || i === n - 1) {
        for (let j = 0; j < m; j++) {
          queue.push([i, j]);
          visited[i][j] = true;
        }
      } else {
        queue.push([i, 0]);
        visited[i][0] = true;
        queue.push([i, m - 1]);
        visited[i][m - 1] = true;
      }
    }

    let head = 0;
    while (head < queue.length) {
      let [x, y] = queue[head++];
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < m &&
          !visited[nx][ny] &&
          board[nx][ny] === 0
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
    return visited;
  }

  function countCheese() {
    let count = 0;
    board.forEach((row) =>
      row.forEach((cell) => {
        if (cell === 1) count++;
      })
    );
    return count;
  }

  let time = 0;
  let lastCheeseCount = 0;
  let currentCheeseCount = countCheese();

  while (currentCheeseCount > 0) {
    lastCheeseCount = currentCheeseCount;
    let visited = bfs();
    // 녹을 치즈 찾기
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j] === 1) {
          for (let k = 0; k < 4; k++) {
            let ni = i + dx[k];
            let nj = j + dy[k];
            if (ni >= 0 && ni < n && nj >= 0 && nj < m && visited[ni][nj]) {
              board[i][j] = 0;
              break;
            }
          }
        }
      }
    }
    currentCheeseCount = countCheese();
    time++;
  }

  console.log(time);
  console.log(lastCheeseCount);
}

meltCheese();
