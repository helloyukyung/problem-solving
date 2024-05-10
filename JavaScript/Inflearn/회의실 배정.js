function solution(meeting) {
  let answer = 0;

  meeting.sort((a, b) => {
    if ([a[1] === a[1]]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let endTime = 0;
  for (let [s, e] of meeting) {
    if (endTime <= s) {
      endTime = e;
      answer++;
    }
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr2));
