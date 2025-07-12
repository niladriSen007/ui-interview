function topologicalSort(graph) {
  let result = []
  let queue = []
  let inDegree = {}

  for (let node in graph) {
    inDegree[node] = 0
  }

  for (let node in graph) {
    for (let neighbour of graph[node]) {
      inDegree[neighbour]++
    }
  }

  for (let node in inDegree) {
    if (inDegree[node] === 0) {
      queue.push(node)
    }
  }

  while (queue.length) {
    const current = queue.shift()
    result.push(current)
    for (let neighbour of graph[current]) {
      inDegree[neighbour]--
      if (inDegree[neighbour] === 0) queue.push(neighbour)
    }
  }

  return result?.length === Object.keys(graph)?.length
    ? result
    : "Graph has a cycle"
}

const DAG = {
  0:[],
  1:[],
  2: ["3"],
  3: ["1"],
  4: ["0", "1"],
  5: ["0", "2"],
}
console.log(topologicalSort(DAG))
