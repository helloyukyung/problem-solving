function solution(str) {
  let answer = "";

  answer = str.replace(/[^0-9]/g,'')

  return Number(answer);
}

console.log(solution("g0en2T0s8eSoft"));
