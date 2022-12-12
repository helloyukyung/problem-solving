const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split(" ");

function solution(input) {
  let a = parseInt(input[0]);
  let b = parseInt(input[1]);

  return [a + b, a - b, a * b, parseInt(a / b), a % b];
}

const answer = solution(input);

for (var i = 0; i < 5; i++) {
  console.log(answer[i]);
}
