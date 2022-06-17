function solution(str) {
  let answer = [...new Set(str)];
  return answer.join("");
}

let str = "ksekkset";
console.log(solution(str));

function solution2(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
console.log(solution2(str));
