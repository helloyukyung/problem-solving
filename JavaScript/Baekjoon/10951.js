const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let i = 0;

while (input[i]) {
  let arr = input[i].split(" ");
  let a = Number(arr[0]);
  let b = Number(arr[1]);
  console.log(a + b);
  i++;
}
