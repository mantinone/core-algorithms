export default function fibonacci( position ) {
  if( typeof position !== 'number' ){
    return 'Invalid Input. Please input a positive non-zero integer'
  }
  if( position < 1 || position%1 !== 0 ){
    return 'Invalid Input. Please input a positive non-zero integer'
  }

  let result = [0,1]

  if (position === 1 ){
    return [0]
  }
  if (position ===2 ){
    return result
  }

  //To PRRR reviewer: The commented code feels more elegant, but the present
  //code seems like it would be more efficient.
  //Is this true?

  //let result = []

  for(let i = 2 /* let i =0*/ ; i < position ; i++ ){
    // if(i<2){
    //   result.push(i)
    // } else {
    result.push( result[i-2]+result[i-1])
  //  }
  }

  return result

}
