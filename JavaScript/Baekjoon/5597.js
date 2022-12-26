const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let answer = [];
for (let i = 1; i <= 30; i++) {
  if (!input.includes(i)) answer.push(i);
}
console.log(answer.join("\n"));
