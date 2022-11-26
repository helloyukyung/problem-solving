function solution(str) {
  const ans = [];
  let num = 1;
  ans.push(str[0]);
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      num = num + 1;
      console.log(num);
    } else {
      if (num !== 1) {
        ans.push(num);
        num = 1; // 초기화
      }
      ans.push(str[i]);
    }
  }
  return ans.join("");
}

console.log(solution("KKHSSSSSSSE"));
