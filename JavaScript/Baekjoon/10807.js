const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");


const arrLength=  Number(input[0])
const arr = input[1].split(" ")

const num = input[2]
let count  = 0

for (let i=0 ; i < arrLength; i++) {

    if(arr[i] === num) {
        count ++
    }
}
console.log(count)