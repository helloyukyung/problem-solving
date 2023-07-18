const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = new Array(n);
arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);

let left = 0;
let right = n - 1;
let sum = 0;
let compare = Infinity;
let answer = new Array(2).fill(0);

while (left !== right) {
  sum = arr[left] + arr[right];

  if (Math.abs(sum) < compare) {
    compare = Math.abs(sum);
    answer[0] = arr[left];
    answer[1] = arr[right];
  }
  if (sum === 0) {
    break;
  } else if (sum > 0) {
    right--;
  } else if (sum < 0) {
    left++;
  }
}
console.log(answer.join(" "));
