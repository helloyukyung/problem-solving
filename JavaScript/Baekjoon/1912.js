const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const n = parseInt(input[0]);

const numbers = input[1].split(" ").map((item) => parseInt(item));

let dp = Array.from({ length: n }, () => 0);

dp[0] = numbers[0];

for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i - 1] + numbers[i], numbers[i]);
}

console.log(Math.max(...dp));
