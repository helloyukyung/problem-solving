const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];

let answer = 0;
while (queue.length > 0) {
  const [z, x, y, days] = queue.shift();

  for (let i = 0; i < 6; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    const nz = z + dz[i];
    if (
      nz >= 0 &&
      nz < H &&
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < M &&
      board[nz][nx][ny] === 0
    ) {
      board[nz][nx][ny] = 1;
      queue.push([nz, nx, ny, days + 1]);
      unripeTomato--; // 안 익은 토마토 개수 감소
    }
  }
  answer = days;
}
console.log(unripeTomato ? -1 : answer);
