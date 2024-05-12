function isCountable(m, mid) {
  // ex) 3 27
  let count = m;
  let tempMid = mid;
  for (let x of arr) {
    if (tempMid >= x) {
      tempMid -= x;
    } else {
      count -= 1;
      if (count < 0) return false;
      tempMid = mid - x;
    }
  }
  return Boolean(count > 0 ? true : false);
}
function solution(m, songs) {
  let answer = 0;

  let lt = Math.max(...songs);
  let rt = 0;
  songs.forEach((song) => {
    rt += song;
  });

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (isCountable(m, mid)) {
      rt = mid - 1;
      answer = mid;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
