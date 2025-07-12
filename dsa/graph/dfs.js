function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return
  console.log(node)
  visited.add(node)

  for (let neighbour of graph[node]) {
    dfs(graph, neighbour, visited)
  }
}

const graph = {
  a: ["b", "c"],
  b: ["d", "e"],
  c: ["f"],
  d: [],
  e: [],
  f: [],
}

dfs(graph, "a")
