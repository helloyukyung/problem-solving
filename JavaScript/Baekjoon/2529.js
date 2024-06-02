const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const k = parseInt(input[0]);
const signs = input[1].split(" ");

let max = "";
let min = "";

const used = new Array(10).fill(false);

function isValid(num1, num2, sign) {
  const n1 = parseInt(num1);
  const n2 = parseInt(num2);
  if (sign === "<") return n1 < n2;
  if (sign === ">") return n1 > n2;
  return false;
}

function dfs(depth, current) {
  if (depth === k + 1) {
    if (!min || current < min) min = current;
    if (!max || current > max) max = current;
    return;
  }
  for (let i = 0; i <= 9; i++) {
    if (!used[i]) {
      if (
        depth === 0 ||
        isValid(current[depth - 1], i.toString(), signs[depth - 1])
      ) {
        used[i] = true;
        dfs(depth + 1, current + i);
        used[i] = false;
      }
    }
  }
}

dfs(0, "");

console.log(max);
console.log(min);
