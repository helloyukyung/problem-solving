function solution(str) {
  str = str.replace(/[^0-9]/g, "");
  const ans = [...new Set(str)].join("");
  return ans;
}

console.log(solution("g0en2T0s8eSoft"));
