const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

function solution (input) {
    const a = parseInt(input[0])
    const b = parseInt(input[1])

    if (a > b) {
        return ">"
    }else if(a < b) {
        return "<"
    }
     else if (a === b){
        return "=="
    }
}

console.log(solution(input))