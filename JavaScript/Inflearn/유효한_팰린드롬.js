function solution(s) {
  let answer = "YES";
  const lowerS = s.toLowerCase().replace(/[^a-z]/g,'')
  const len = lowerS.length

  for(let i=0; i<Math.floor(len/2); i++){
    if(lowerS[i] !== lowerS[len-1-i]){
      answer = "NO"
      break
    }
  }
  return answer;
}

let str = "found7, time: study; Ydufdts; emit, 7Dnuof";

console.log(solution(str));
