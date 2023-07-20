const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [h, w] = input[0].split(" ").map((val) => +val);

const rain = input[1].split(" ").map((val) => +val);
let water = 0;

for (let i = 0; i < rain.length; i++) {
  const maxLen = Math.max(...rain.slice(0, i + 1));
  const minLen = Math.max(...rain.slice(i));
  const minBlock = Math.min(maxLen, minLen);
  water += minBlock - rain[i];
}
console.log(water);
