const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let len = input[0] * 1;

for (let i = 1; i <= len; i++) {
    let score = input[i].split(' ');
    let arr = score.shift();
    let count = 0;

    let avg = score.reduce((acc, v) => acc += v * 1, 0);

    avg /= arr;

    for (let j = 0; j < arr; j++) {
        if (score[j] > avg) {
            count++;
        }
    }

    let result = ((count / arr) * 100).toFixed(3);

    console.log(result + "%");
}