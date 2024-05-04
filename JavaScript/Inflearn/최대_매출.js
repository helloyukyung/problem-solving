function solution(k, arr) {
  let answer = 0;
  let sum = 0;

  for (let i = 2; i < arr.length; i++) {
    sum = arr[i - 2] + arr[i - 1] + arr[i];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
