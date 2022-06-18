function solution(str) {
  let answer;
  answer = str.filter(function (v, i) {
    if (str.indexOf(v) === i) return true;
  });

  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
