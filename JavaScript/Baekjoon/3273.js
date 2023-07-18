const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[1]
  .split(" ")
  .map((num) => Number(num))
  .sort((a, b) => a - b);
const k = Number(input[2]);

function solution(arr, k) {
  let start = 0;
  let end = arr.length - 1;
  let count = 0;

  while (start !== end) {
    if (arr[start] + arr[end] === k) {
      start += 1;
      count += 1;
    } else if (arr[start] + arr[end] < k) {
      start += 1;
    } else {
      end -= 1;
    }
  }
  return count;
}

console.log(solution(arr, k));
