function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  d = s.split("").reverse();

  if (s.split("").reverse().join("") !== s) {
    return "NO";
  }
  return answer;
}

let str = "gooG";
console.log(solution(str));
