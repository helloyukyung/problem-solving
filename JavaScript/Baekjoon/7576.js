const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [X, Y] = input.shift().split(" ").map(Number);
let queue = [];
let days = 0;

const tomatoes = input.map((val) => val.split(" ").map(Number));

tomatoes.map((val, i) => {
  val.map((va, j) => {
    if (va == 1) {
      queue.push([i, j]);
    }
  });
});

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

while (queue.length > 0) {
  // nextQueue: 다음 날 익을 토마토의 위치를 저장하는 큐
  let nextQueue = [];
  for (let [y, x] of queue) {
    for (let [dy, dx] of directions) {
      const ny = y + dy,
        nx = x + dx;
      if (ny >= 0 && ny < Y && nx >= 0 && nx < X) {
        if (tomatoes[ny][nx] === 0) {
          tomatoes[ny][nx] = 1;
          nextQueue.push([ny, nx]);
        }
      }
    }
  }
  if (nextQueue.length > 0) {
    days++;
    queue = nextQueue;
  } else {
    break;
  }
}

console.log(tomatoes.join(" ").includes(0) ? -1 : days);
