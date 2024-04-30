function solution(str) {
  let answer = "";
  let cnt = 1;
  for(let i=0;i<str.length;i++){
    if(str[i]===str[i+1]) {
      cnt++
    } else {
      if(cnt > 1) {
        answer += str[i] + cnt
        cnt=1
      }else {
        answer += str[i]
        cnt=1
      }
    }

  }
  return answer;
}

console.log(solution("KKHSSSSSSSE"));
