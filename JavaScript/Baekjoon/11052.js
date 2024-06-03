const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const n = parseInt(input[0]);
const cardPacks = input[1].split(" ").map(Number); // 각 카드 팩의 가격

let dp = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + cardPacks[j - 1]);
  }
}

console.log(dp[n]);
