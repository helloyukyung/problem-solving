const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
input = fs.readFileSync(filePath).toString().split("\n");

const a = Number(input[0]);
const b = Number(input[1]);

if (a > 0 && b > 0) {
  console.log(1);
} else if (a < 0 && b > 0) {
  console.log(2);
} else if (a < 0 && b < 0) {
  console.log(3);
} else {
  console.log(4);
}
