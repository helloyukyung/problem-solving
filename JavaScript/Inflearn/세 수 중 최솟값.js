function solution(a, b, c) {
  let answer;
  if (a > b) {
    answer = b;
  } else {
    answer = a;
  }
  if (c < answer) {
    answer = c;
  }
  return answer;
}

console.log(solution(6, 5, 11));
