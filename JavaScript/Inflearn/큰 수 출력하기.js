function solution(arrLen, arr) {
  let answer = [arr[0]];
  let max = arr[0];
  for (let i = 0; i < arrLen; i++) {
    if (arr[i] > max) {
      max = arr[i];
      answer.push(max);
    } else {
      max = arr[i];
    }
  }
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr.length, arr));
