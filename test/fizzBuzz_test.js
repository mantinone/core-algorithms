import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', function(){

  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })

  it('returns an array of numbers from 1 to {N}', function(){
    const buzzArray = fizzBuzz(54)
    expect(buzzArray.length).to.equal(54)
  })

  it('replaces mutiples of 3 with the string\'Fizz\', multiples of 5 with \'Buzz\', and multiples of 3 & 5 with \'FizzBuzz\'', function(){
    const buzzArray = fizzBuzz(54)

    expect(buzzArray[0]).to.eql(1)
    expect(buzzArray[2]).to.eql('Fizz')
    expect(buzzArray[5]).to.eql('Fizz')
    expect(buzzArray[4]).to.eql('Buzz')
    expect(buzzArray[14]).to.eql('FizzBuzz')
    expect(buzzArray[13]).to.eql(14)
    expect(buzzArray[29]).to.eql('FizzBuzz')
  })
})
