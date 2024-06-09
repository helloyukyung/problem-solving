const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const k = parseInt(input[0]);
const signs = input[1].split(" ");

let maxNum = "";
let minNum = "";

const used = Array(10).fill(false);

function isValid(a, b, sign) {
  if (sign === "<") return a < b;
  if (sign === ">") return a > b;
  return false;
}

function dfs(index, numStr) {
  if (index === k + 1) {
    if (maxNum === "" || numStr > maxNum) maxNum = numStr;
    if (minNum === "" || numStr < minNum) minNum = numStr;
    return;
  }
  for (let i = 0; i < 10; i++) {
    if (!used[i]) {
      if (
        index === 0 ||
        isValid(parseInt(numStr[index - 1]), i, signs[index - 1])
      ) {
        used[i] = true;
        dfs(index + 1, numStr + i);
        used[i] = false;
      }
    }
  }
}

dfs(0, "");

console.log(maxNum);
console.log(minNum);
