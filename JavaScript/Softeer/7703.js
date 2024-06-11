const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];

rl.on("line", function (line) {
  inputLines.push(line);
}).on("close", function () {
  const n = parseInt(inputLines[0]);
  let result = "";

  for (let i = 1; i <= n; i++) {
    const [Si, Ti] = inputLines[i].split(" ");
    const index = Si.indexOf("X") !== -1 ? Si.indexOf("X") : Si.indexOf("x");
    const char = Ti[index];
    result += char.toUpperCase();
  }

  console.log(result);
  process.exit();
});
