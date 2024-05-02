function solution(arr1, arr2) {
  let answer = [];

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (true) {
    if (i == arr1.length || j === arr2.length) break;
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      answer.push(arr1[i]);
      i++;
      j++;
    }
  }
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
