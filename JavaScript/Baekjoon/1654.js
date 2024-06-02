const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const [k, n] = input[0].split(" ").map(Number);
const LANCables = input.slice(1).map(Number);

let answer = 1;
let lt = 0;
let rt = Math.max(...LANCables);

function isValid(num) {
  let temp = 0;
  for (let x of LANCables) {
    temp += Math.floor(x / num);
  }
  if (temp >= n) return true;
  else return false;
}

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
