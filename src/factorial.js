export default function factorial(operand) {
  if( typeof operand !== 'number' ){
    return 'Please enter a number'
  }
  
  let accumulator = 1
  for(let i = 1; i <= operand; i++){
    accumulator *= i
  }
  return accumulator
}
