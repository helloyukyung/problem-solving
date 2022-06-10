function solution(a, b, c) {
  const answer = [a, b, c];
  answer.sort();
  if (answer[0] + answer[1] < answer[2]) {
    return "NO";
  } else {
    return "YES";
  }
}

console.log(solution(6, 7, 11));
