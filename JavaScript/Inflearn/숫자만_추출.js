function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return answer;
}

console.log(solution("g0en2T0s8eSoft"));
