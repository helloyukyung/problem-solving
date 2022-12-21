const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
input = fs.readFileSync(filePath).toString().split("\n");


for (let i =0 ; i < Number(input[0]); i++) {
    let ans  = input[i+1].split(" ")
    console.log(`Case #${i+1}: ${ans[0]} + ${ans[1]} = ${Number(ans[0]) + Number(ans[1])}`)
}