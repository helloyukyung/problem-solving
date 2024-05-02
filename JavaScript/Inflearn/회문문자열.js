function solution(s) {
  let answer = "YES";
  const lowerS = s.toLowerCase();

  for (let i = 0; i < Math.floor(s.length); i++) {
    if (lowerS[i] !== lowerS[s.length - 1 - i]) {
      answer = "NO";
      break;
    }
  }
  return answer;
}

let str = "gos2oG";
console.log(solution(str));
