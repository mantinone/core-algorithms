export default function fizzBuzz(N) {
  const buzzArray = []
  for (let i = 1;  i <= N; i++) {
    let pushVal = ''

    if(i % 3 === 0) {
      pushVal = pushVal.concat('Fizz')
    }
    if(i % 5 === 0) {
      pushVal = pushVal.concat('Buzz')
    }
    if(pushVal === '') {
      pushVal = i
    }
    buzzArray.push(pushVal)
  }

  return buzzArray
}