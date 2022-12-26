const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const [N, X] = input[0].split(" ");

const arr = input[1].split(" ");
const answer = [];

for (let i = 0; i < N; i++) {
  if (Number(arr[i] < Number(X))) {
    answer.push(Number(arr[i]));
  }
}

console.log(answer.join(" "));
