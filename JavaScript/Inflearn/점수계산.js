function solution(arr) {
  let answer = 0;
  let cnt = 0;
  for (let i=0; i<arr.length; i++){
    if (arr[i]){
      answer += 1 + cnt
      cnt += 1
    } else {
      cnt = 0
    }
  }
  return answer
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
