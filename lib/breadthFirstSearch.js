function breadthFirstSearch (graph, start, end) {

  // if start and/or end are not provied return false
  graph = graph || {}
  start = start === undefined ? '' : start
  end = end === undefined ? '' : end

  const visited = {}
  const todo = [start]
  let currNode, children

  while (todo.length > 0) {
    // grab head of todo list
    currNode = todo.shift()

    if (currNode in visited) continue  // note!!
    visited[currNode] = true
    children = graph[currNode]

    for (var i in children) {
      if (children[i] === end) return true
      todo.push(children[i])
    }
  }
  return false
}

function findPath (graph, start, end) {
// if start and/or end are not provied return false
  graph = graph || {}
  start = start === undefined ? '' : start
  end = end === undefined ? '' : end

  const visited = {}
  const todo = [start]
  const path = {}
  let currNode, children

  while (todo.length) {
    // grab head of todo list
    currNode = todo.shift()

    if (currNode in visited) continue  // note!!
    visited[currNode] = true
    children = graph[currNode]

    for (var i in children) {
      path[children[i]] = curr
      if (children[i] === end) 
        return flattenPath(path, children[i])
      todo.push(children[i])
    }
  }
  return []
}

function flattenPath (path, node) {
  // {2: 1, 1: 0} --> [0, 1, 2]
  if (path[node] === undefined) return [node]
  return flattenPath (path, path[node].concat[node])
}

// function breadthFirstSearch (graph, start, end) {
//   let thisNode = start
//   let store = {
//     [thisNode]: true
//   }
//   let queue = graph[start]

//   do {
//     if (thisNode === end) return true

//     thisNode = queue.shift()

//     if (!store[thisNode]) {
//       queue = queue.concat(graph[thisNode])
//       store[thisNode] = true
//     }
//   } while (queue.length > 0)

//   return false
// }

module.exports = breadthFirstSearch