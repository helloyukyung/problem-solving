const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = "";

for (let i = 1; i <= input[0]; i++) {
  tmp = input[i].split(" ");
  answer += parseInt(tmp[0]) + parseInt(tmp[1]) + "\n";
}

console.log(answer);
