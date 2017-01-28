export default function palindrome(inputString) {
  if( typeof inputString !== 'string' ){
    return 'Please enter a string'
  }

  let cleanInput = stripString(inputString)
  let reverseString = reverse(cleanInput)

  return cleanInput===reverseString
}

function stripString(str){
  return str.toLowerCase().replace(/[^\w]/g, '')
}

function reverse(str){
  let reverse = ''

  for (let i = str.length-1; i > -1; i--){
    reverse = reverse.concat(str[i])
  }

  return reverse
}
