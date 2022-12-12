const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [A, B] = fs.readFileSync(filePath).toString().trim().split("\n");

const position3 = Number(A) * Number(B[2]);
const position4 = Number(A) * Number(B[1]);
const position5 = Number(A) * Number(B[0]);
const position6 = Number(A) * Number(B);

console.log(position3);
console.log(position4);
console.log(position5);
console.log(position6);
