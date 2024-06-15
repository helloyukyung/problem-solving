const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const [N, C] = input[0].split(" ").map(Number);

const homes = input.slice(1, N + 1).map(Number);

homes.sort((a, b) => a - b);

function isValid(maxDistance) {
  let temp = 0;
  let count = 1;
  for (let i = 1; i < homes.length; i++) {
    let t2 = homes[i] - homes[i - 1];

    temp += t2;
    if (temp >= maxDistance) {
      count += 1;
      temp = 0;
    }
  }

  if (count >= C) return true;
  return false;
}

let lt = 0;
let rt = homes[homes.length - 1];
let answer = 0;

while (lt <= rt) {
  let mid = parseInt((lt + rt) / 2);

  if (isValid(mid)) {
    lt = mid + 1;
    answer = mid;
  } else {
    rt = mid - 1;
  }
}

console.log(answer);
