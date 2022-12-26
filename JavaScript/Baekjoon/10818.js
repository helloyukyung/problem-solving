const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const n = Number(input[0]);
const list = input[1].split(" ");

let max = -1000000;
let min = 1000000;

for (let i = 0; i < n; i++) {
  let value = Number(list[i]);
  if (value < min) min = value;
  if (value > max) max = value;
}

console.log(`${min} ${max}`);
