const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let count = 0;
input = input[0].split("");
let prev = input[0];

for (let i = 1; i < input.length; i++) {
  if (prev !== input[i]) {
    count++;
    prev = input[i];
  }
}
console.log(Math.floor(count / 2));
