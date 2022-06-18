function solution(str) {
  let answer = "";
  for (let i of str) {
    if (i.length > answer.length) {
      answer = i;
    }
  }

  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
