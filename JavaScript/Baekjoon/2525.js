const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");
const time = input[0].split(" ");
const cookingTime = Number(input[1]);

const FULL_HOUR = 24;
const FULL_MINUTE = 60;

const addHour = parseInt((Number(time[1]) + cookingTime) / FULL_MINUTE);

let hour = Number(time[0]) + addHour;
let minute = (Number(time[1]) + cookingTime) % FULL_MINUTE;

if (hour >= FULL_HOUR) {
  hour -= FULL_HOUR;
}

console.log(hour, minute);
