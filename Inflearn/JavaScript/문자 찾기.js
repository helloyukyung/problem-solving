function solution(str, a) {
  let answer = 0;
  for (let x of str) {
    if (x === a) {
      answer++;
    }
  }
  return answer;
}
let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

function solution2(str, a) {}
