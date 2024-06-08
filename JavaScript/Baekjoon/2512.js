const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const N = parseInt(input[0]);
const budget = input[1].split(" ").map(Number);

const M = parseInt(input[2]);

function isValid(num) {
  let tmp = 0;
  for (let x of budget) {
    if (x > num) {
      tmp += num;
    } else {
      tmp += x;
    }
  }
  if (tmp > M) return false;
  return true;
}

let lt = 0;
let rt = Math.max(...budget);
let answer = 0;

while (lt <= rt) {
  let mid = parseInt((lt + rt) / 2);

  if (isValid(mid)) {
    answer = mid;
    lt = mid + 1;
  } else {
    rt = mid - 1;
  }
}

console.log(answer);
