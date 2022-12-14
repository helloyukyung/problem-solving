const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

let HH = Number(input[0]);
let MM = Number(input[1]);

if (MM >= 45) {
  MM = MM - 45;
} else {
  if (HH === 0) {
    HH = 23;
    MM = 60 + MM - 45;
  } else {
    HH = HH - 1;
    MM = 60 + MM - 45;
  }
}

console.log(HH, MM);
