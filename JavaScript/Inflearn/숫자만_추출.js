function solution(str) {
  str = str.replace(/[^0-9]/g, "");

  return parseInt(str);
}

console.log(solution("g0en2T0s8eSoft"));
