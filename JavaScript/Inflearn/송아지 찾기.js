function solution(s, e) {
  const directions = [1, -1, 5];
  let answer = 0;

  const queue = [[s, 0]];
  const visited = Array.from({ length: 10001 }, () => false);

  let head = 0;
  while (head < queue.length) {
    const [x, jump] = queue[head++];
    if (x === e) {
      answer = jump;
      break;
    }

    for (let direction of directions) {
      const nx = direction + x;
      if (nx > 0 && nx <= 10000 && !visited[nx]) {
        visited[nx] = true;
        queue.push([nx, jump + 1]);
      }
    }
  }
  return answer;
}

console.log(solution(5, 14));
