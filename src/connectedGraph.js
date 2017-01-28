export default function connectedGraph( graph = {} ){
  if( graph == null ){
    return 'Cannot check connection parity of null'
  }
  if( graph.constructor === Array || graph.constructor !== Object ){
    return 'Please use objects'
  }

  let nodes = Object.keys(graph)
  let node = nodes[0]
  const alreadyVisited = []

  const recursion = vertex => {
    if(!alreadyVisited.includes(vertex)){
      let destinations = graph[vertex]
      alreadyVisited.push( vertex )
      for( let e of destinations ){
        recursion(e)
      }
    }
  }

  recursion(node)

  for(let node2 of nodes){
    if(!alreadyVisited.includes(node2)){
      return false
    }
  }
  return true
}
