const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let max = Number(input[0]);
let count = 0;

for (i = 0; i < 9; i++) {
  if (Number(input[i]) > max) {
    max = Number(input[i]);
    count = i;
  }
}

console.log(max);
console.log(count + 1);
