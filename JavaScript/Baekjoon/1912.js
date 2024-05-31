const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const n = parseInt(input[0]);

const dp = Array.from({ length: n + 1 }, () => 0);

dp[1] = 1;
let result = dp[1];

for (let i = 2; i <= n; i++) {
  dp[i] = Math.max(dp[i - 1] + parseInt(input[i]), parseInt(input[i]));
  result = Math.max(result, dp[i]);
}

console.log(result);
