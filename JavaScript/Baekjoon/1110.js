const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const data = parseInt(input);
let cur = plusCycle(data);
let cycleLength = 1;

function plusCycle(n) {
  if (n < 10) return n * 11;
  var a = parseInt(n / 10);
  var b = n % 10;
  return b * 10 + ((a + b) % 10);
}

while (cur !== data) {
  cycleLength += 1;
  cur = plusCycle(cur);
}
console.log(cycleLength);
