export default function setUnion( setOfPoints = [] ){
  if( setOfPoints == null ){
    return 'Cannot find closest pair of null values'
  }
  if( setOfPoints.constructor !== Array ){
    return 'Please use Arrays'
  }

  let point1, point2

  const bruteForce = _ => {
    let min = Infinity
    for( let i = 0; i < setOfPoints.length; i++ ){
      for( let j = i+1; j < setOfPoints.length; j++ ){
        if(setOfPoints[i] && setOfPoints[j]){
          let dist = Math.sqrt( Math.pow(setOfPoints[i][0] - setOfPoints[j][0], 2) + Math.pow(setOfPoints[i][1] - setOfPoints[j][1], 2) )
          if( dist < min ){
            min = dist
            point1 = setOfPoints[i]
            point2 = setOfPoints[j]
          }
        }
      }
    }

    return {point1, point2, distance: min}
  }

  const nlogn = _ => {
    // Complete me as stretch goal
  }

  return bruteForce()
}
