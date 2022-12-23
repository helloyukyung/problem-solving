const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
input = fs.readFileSync(filePath).toString().trim();


const inputNumber  = Number(input)

for (let i=1; i <=inputNumber; i++){
    let space = " ".repeat(inputNumber - i)
    let star ="*".repeat(i)
    console.log(space+star)
}