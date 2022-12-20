const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const totalPrice = Number(input[0]);
const thingsCount = input[1];

let calculatedPrice = 0;

for (let i = 2; i < Number(thingsCount) + 2; i++) {
  const things = input[i].split(" ");
  calculatedPrice += Number(things[0]) * Number(things[1]);
}

console.log(calculatedPrice === totalPrice ? "Yes" : "No");
