const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
input = fs.readFileSync(filePath).toString().trim().split("\n");


let i = 0;
while(input[i]){
    let arr = input[i].split(' ');
    let a = parseInt(arr[0]);
    let b = parseInt(arr[1]);
    if(a > 0 && b > 0){
        console.log(a + b);
    }
    i++;
}