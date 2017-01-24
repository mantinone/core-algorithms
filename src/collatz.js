export default function makeChange(collatzerand) {
  if(collatzerand <= 0 || collatzerand % 1 !== 0) return 'Please use only ordinal natural numbers. (1,2,3...)'

  while(collatzerand !== 1){
    if(collatzerand % 2 === 0) collatzerand /= 2
    else collatzerand = (collatzerand * 3) + 1
  }

  return collatzerand
}
