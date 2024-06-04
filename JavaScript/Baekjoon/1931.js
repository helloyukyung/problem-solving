const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const N = parseInt(input[0]);

const time = input.slice(1).map((v) => v.split(" ").map((v) => parseInt(v)));

time.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let count = 0;
let endTime = 0;

for (let i = 0; i < N; i++) {
  if (time[i][0] >= endTime) {
    endTime = time[i][1];
    count++;
  }
}

console.log(count);
