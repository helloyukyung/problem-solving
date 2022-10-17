function solution(d) {
  let answer;
  answer = parseInt(d / 12);

  if (studentNumber % 12 !== 0) {
    answer = answer + 1;
  }

  return answer;
}

console.log(solution(178));
