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

function solution2(a, b, c) {
  let answer = "YES",
    max;
  let sum = a + b + c;

  if (a > b) max = a;
  else max = b;
  if (max < c) max = c;
  if (sum - max <= max) answer = "NO";
  return answer;
}
console.log(solution2(6, 7, 11));
