const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const [A, B, V] = input[0].split(" ").map(Number);

let answer = Math.ceil((V - A) / (A - B)) + 1;

console.log(answer);
