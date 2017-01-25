export default function setIntersect( set1 = [], set2 = [] ){
  if( set1 == null || set2 == null){
    return 'Cannot union null values'
  }
  if( set1.constructor !== Array || set2.constructor !== Array){
    return 'Please use Arrays'
  }

  let result = []

  for ( let i of set2 ){
    if( i.constructor === Array || typeof i === 'object' || typeof i === 'function'){
      return 'No nested arrays or objects'
    }
    let testval = findDuplicate( i, set1 )
    if( typeof testval === 'string'){
      return testval
    }
    if( testval ) {
      result.push( i )
    }
  }

  return result
}


function findDuplicate( item, arr ){
  for ( let i of arr ){
    if( i.constructor === Array || typeof i === 'object' || typeof i === 'function'){
      return 'No nested arrays or objects'
    }
    if( item === i ){ return true }
  }
  return false
}
