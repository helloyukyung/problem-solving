const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 0; i < input.length-2; i++) {
    let ans = input[i+1].split(' ');
    console.log("Case #"+String(i+1)+': '+(Number(ans[0])+Number(ans[1])));
}
