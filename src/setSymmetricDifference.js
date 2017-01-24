export default function setSymmetricDifference( set1 = [], set2 = [] ){
  if( set1 == null || set2 == null){
    return 'Cannot union null values'
  }
  if( set1.constructor !== Array || set2.constructor !== Array){
    return 'Please use Arrays'
  }
  if( set1.length === 0 ){
    return set2
  }
  if( set2.length === 0 ){
    return set1
  }
  let results = set1.concat(set2)

  const duplicates = []
  for( let i of set1 ){
    if( i.constructor === Array || typeof i === 'object' || typeof i === 'function' ){
      return 'No nested arrays or objects'
    }
    for( let j of set2 ){
      if( j.constructor === Array || typeof j === 'object' || typeof j === 'function'){
        return 'No nested arrays or objects'
      }
      if (i === j){
        duplicates.push(i)
      }
    }
  }

  results = results.filter( value => {
    return !duplicates.includes(value)
  })

  return results
}
