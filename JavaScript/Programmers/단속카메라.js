function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);
  let count = 1;
  let camera = routes[0][1];

  for (let i = 0; i < routes.length; i++) {
    if (routes[i][0] > camera) {
      count++;
      camera = routes[i][1];
    }
  }
  return count;
}
