const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  const chess = [1, 1, 2, 2, 2, 8];
  answer = [];

  for (let i = 0; i < chess.length; i++) {
    let count = chess[i] - parseInt(input[i]);

    answer.push(count);
  }

  return answer.join(" ");
}

console.log(solution(input));
