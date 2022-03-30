const solution = (n, computers) => {
  let answer = 0;
  const visited = new Array(n).fill(false);

  const CheckNetwork = (from) => {
    for (let to = 0; to < n; to++) {
      if (computers[from][to] === 1 && !visited[to]) {
        visited[to] = true;
        CheckNetwork(to);
      }
    }
  };

  for (let computerIndex = 0; computerIndex < n; computerIndex++) {
    if (!visited[computerIndex]) {
      visited[computerIndex] = true;
      console.log(computerIndex, visited);
      CheckNetwork(computerIndex);
      answer++;
    }
  }

  return answer;
};

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // expected 2
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
); // expected 1
