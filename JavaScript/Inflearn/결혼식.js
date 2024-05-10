function solution(times) {
  let answer = 0;

  let timeStamps = [];
  for (let [s, e] of times) {
    timeStamps.push([s, "s"]);
    timeStamps.push([e, "e"]);
  }

  timeStamps.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let cnt = 0;
  for (let x of timeStamps) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
