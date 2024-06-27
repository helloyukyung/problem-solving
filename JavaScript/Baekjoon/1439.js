const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let arr0 = [];
let arr1 = [];

let arr = input[0];
let temp = 0;
for (let i = 0; i <= arr.length; i++) {
  if ((i === 0 || arr[i] === arr[i - 1]) && arr.length !== i) {
    temp++;
  } else {
    if (arr[i - 1] === "1") {
      arr1.push(temp);
    } else {
      arr0.push(temp);
    }
    temp = 1;
  }
}

if (arr0.length > arr1.length) {
  // 1뒤집기
  console.log(arr1.length);
} else {
  // 0뒤집기
  console.log(arr0.length);
}
