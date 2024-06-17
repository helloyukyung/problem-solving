const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ");
const trees = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let lt = 0;
let rt = Math.max(...trees);
let answer = 0;
function isValid(cutLength) {
  let count = 0;
  for (let tree of trees) {
    let tmp = tree - cutLength;
    if (tmp > 0) {
      count += tmp;
    }
  }

  if (count >= M) {
    return true;
  } else {
    return false;
  }
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
