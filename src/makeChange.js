export default function makeChange({price, amountGiven}) {
  let difference = amountGiven - price
  if ( difference != difference ){
    return "Please enter a number."
  }
  if ( difference < 0 ){
    return 'Not enough money given.'
  }

  let change = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  }

  while( difference > 24 ){
    change.quarters++
    difference -= 25
  }

  while( difference > 9 ){
    change.dimes++
    difference -= 10
  }

  while( difference > 4 ){
    change.nickels++
    difference -= 5
  }

  while( difference > 0 ){
    change.pennies++
    difference -= 1
  }

  return change
}
