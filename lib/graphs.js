function Graph () {
  this.A = ['B', 'C', 'D']
  this.B = ['C']
  this.C = ['D']
  this.D = ['E', 'F']
  this.E = ['F']
  this.F = ['C']
}

// let testGraph = new Graph

// console.log(testGraph)
// let graphKeys = Object.keys(testGraph)
// for(let i = 0; i < graphKeys.length; i++) {
//   console.log(graphKeys[i], testGraph[graphKeys[i]][0])
// }
// for(let node in testGraph) {
//   console.log(node, testGraph[node][0])
// }
// let node = 'C'
// console.log(testGraph[testGraph.C[0]])
// console.log(testGraph[node][0])
// console.log(testGraph[testGraph[node][0]])

// let start = 'A'
// let end = 'F'
// let store = [start]
// let queue = []
// let nodeList
// let nextNode = start

// console.log('store',store)
// let i = 0

// function findEnd (graph, nextNode, end) {
//   let nodeList = graph[nextNode]
//   if (nodeList.indexOf(end)) return true
  
//   //store = store.concat(nodeList)
//   queue = nodeList
//   for (let i = 0; i < queue.length; i++) {
//     nextNode = queue.shift()
//     findEnd()
//   }
// }
        













module.exports = Graph