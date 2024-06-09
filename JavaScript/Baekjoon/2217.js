const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);

const rope = Array.from({ length: N }, () => 0);

for (let i = 0; i < N; i++) {
  rope[i] = parseInt(input[i + 1]);
}

rope.sort((a, b) => b - a);

let max = 0;

for (let i = 0; i < N; i++) {
  max = Math.max(max, rope[i] * (i + 1));
}

console.log(max);
