function bfs(graph, start) {
  let visited = new Set()
  const queue = [start]
  while (queue.length) {
    const elem = queue.shift()
    if (!visited.has(elem)) {
      console.log(elem + "->")
      visited.add(elem)
      queue.push(...graph[elem])
    }
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

bfs(graph, "a")
