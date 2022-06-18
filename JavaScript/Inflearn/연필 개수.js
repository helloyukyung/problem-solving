function solution(studentNumber) {
  let answer;
  answer = parseInt(studentNumber / 12);
  if (studentNumber % 12 !== 0) {
    answer = answer + 1;
  }
  return answer;
}

console.log(solution(178));

function solution2(studentNumber) {
  let answer = Math.ceil(studentNumber / 12);

  return answer;
}
console.log(solution2(178));
