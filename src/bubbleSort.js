export default function bubbleSort( initialSet ){
  if( initialSet == null ){
    return 'Cannot sort null'
  }
  if( initialSet.constructor !== Array ){
    return 'Please use Arrays'
  }

  let end = initialSet.length

  while(end > 1){
    for( let i = 1; i < end; i++){
      if( initialSet[i-1] > initialSet[i]){
        let temp = initialSet[i]
        initialSet[i] = initialSet[i-1]
        initialSet[i-1] = temp
      }
    }
    end--
  }

  return initialSet
}
