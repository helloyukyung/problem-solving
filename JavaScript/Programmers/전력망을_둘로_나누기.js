function solution(n, wires) {
  let answer = n;

  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [v1, v2] of wires) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  function bfs(start, cut, visited) {
    const queue = [start];
    let count = 1;

    while (queue.length > 0) {
      const node = queue.shift();

      for (const next of graph[node]) {
        if (next === cut || visited[next]) continue;

        visited[next] = true;
        queue.push(next);
        count++;
      }
    }

    return count;
  }

  for (const [v1, v2] of wires) {
    const visited = Array(n + 1).fill(false);

    visited[v1] = true;

    const count1 = bfs(v1, v2, visited);
    const count2 = n - count1;

    answer = Math.min(answer, Math.abs(count1 - count2));
  }

  return answer;
}
