const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);

const rope = input.slice(1).map((v) => parseInt(v));

rope.sort((a, b) => a - b);

let max = 0;

for (let i = 0; i < N; i++) {
  max = Math.max(max, rope[i] * (N - i));
}

console.log(max);
