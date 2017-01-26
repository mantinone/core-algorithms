export default function closestPair( setOfPoints = [] ){
  if( setOfPoints == null ){
    return 'Cannot find closest pair of null values'
  }
  if( setOfPoints.constructor !== Array ){
    return 'Please use Arrays'
  }

  let point1, point2

  let min = Infinity
  for( let i = 0; i < setOfPoints.length; i++ ){
    for( let j = i+1; j < setOfPoints.length; j++ ){
      if(setOfPoints[i] && setOfPoints[j]){
        let dist = distance(setOfPoints[i],setOfPoints[j])
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

const distance = ( p1, p2 ) => {
  return Math.sqrt( Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2) )
}
