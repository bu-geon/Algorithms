function solution(n, edge) {
  const visited = Array.from({ length: n + 1 }, (_, i) =>
    i === 1 ? true : false
  );
  const distances = new Array(n + 1).fill(0);
  const que = [1];

  while (que.length) {
    const currentNode = que.shift();
    edge.forEach((nodes) => {
      if (nodes[0] === currentNode && !visited[nodes[1]]) {
        que.push(nodes[1]);
        visited[nodes[1]] = true;
        distances[nodes[1]] = distances[currentNode] + 1;
      } else if (nodes[1] === currentNode && !visited[nodes[0]]) {
        que.push(nodes[0]);
        visited[nodes[0]] = true;
        distances[nodes[0]] = distances[currentNode] + 1;
      }
    });
  }

  const maxDistance = Math.max(...distances);
  return distances.filter((d) => d === maxDistance).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
