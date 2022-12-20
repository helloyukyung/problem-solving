const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/);
const [n, ...arr] = input;

for (let i = 0; i < n * 2; i++) {
  if (i % 2 == 0) {
    console.log(Number(arr[i]) + Number(arr[i + 1]));
  }
}
