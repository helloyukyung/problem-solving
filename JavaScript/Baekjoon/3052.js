const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const userNum = [];

input.forEach((x) => {
  const num = x % 42;

  if (userNum.indexOf(num) === -1) {
    userNum.push(num);
  }
});

console.log(userNum.length);
