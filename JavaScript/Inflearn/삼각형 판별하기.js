function solution(a, b, c) {
  let answer = "NO";
  let numbers = [a, b, c];
  numbers.sort();

  if (numbers[2] <= numbers[1] + numbers[0]) {
    answer = "YES";
  }
  return answer;
}

console.log(solution(6, 7, 11));
