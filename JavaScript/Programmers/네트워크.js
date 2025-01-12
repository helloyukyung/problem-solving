function solution(n, computers) {
  const visited = Array(n).fill(false);
  let network = 0;

  function dfs(comIndex) {
    visited[comIndex] = true;
    for (let network of computers) {
      if (network[comIndex] === 1) {
        for (let j = 0; j < n; j++) {
          if (network[j] === 1 && !visited[j]) {
            visited[j] = true;
            dfs(j);
          }
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      network++;
      dfs(i);
    }
  }

  return network;
}
