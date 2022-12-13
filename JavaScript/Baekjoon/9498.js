const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim()

function solution (input) {
    const score = Number(input)
 if( 90 <= score && score <= 100) {
     return "A"
 } else if ( 80 <= score && score<= 89) {
     return "B"
 } else if( 70 <= score && score <= 79){
     return "C"
 }else if( 60 <= score && score <= 69){
     return "D"
 } else {
     return "F"
 }
}


console.log(solution(input))