function solution(str) {
  let answer = [...new Set(str)];
  return answer.join();
}

let str = "ksekkset";
console.log(solution(str));
