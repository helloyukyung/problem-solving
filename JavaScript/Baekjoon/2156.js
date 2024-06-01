const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const n = parseInt(input[0]);
const wine = input.slice(1).map((value) => parseInt(value));

const dp = Array.from({ length: n }, () => 0);

dp[0] = wine[0];

if (n > 1) {
  dp[1] = wine[0] + wine[1];
}

if (n > 2) {
  dp[2] = Math.max(wine[0] + wine[2], wine[1] + wine[2], dp[1]);
}

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(
    dp[i - 3] + wine[i - 1] + wine[i],
    dp[i - 2] + wine[i],
    dp[i - 1]
  );
}

console.log(dp[n - 1]);
