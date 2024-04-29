function solution(s) {
  let answer = "YES";
  const lowerS = s.toLowerCase().replace(/[^a-z]/g,'')

  for(let i=0; i<lowerS.length; i++){
    if(lowerS[i] !== lowerS[lowerS.length-1-i]){
      answer = "NO"
      break
    }
  }
  return answer;
}

let str = "found7, time: study; Ydufdts; emit, 7Dnuof";

console.log(solution(str));
