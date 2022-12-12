const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
input = fs.readFileSync(filePath).toString().split(" ");

function solution(input) {
  let a = parseInt(input[0]);
  let b = parseInt(input[1]);
  return a * b;
}
console.log(solution(input));
