const fs = require("fs");
const { maxHeaderSize } = require("http");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

function solution(a, b, c) {
  if (a === b && a === c && b === c) return console.log(10000 + a * 1000);

  if (a !== b || a !== c || b !== c) {
    if (a === b || a === c) return console.log(1000 + a * 100);
    if (b === c) return console.log(1000 + b * 100);
  }

  if (a !== b && a !== c && b !== c) {
    const sort = [a, b, c].sort();
    return console.log(sort.pop() * 100);
  }
}

solution(a, b, c);
