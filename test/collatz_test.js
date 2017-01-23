import { expect } from 'chai'
import collatz from '../src/collatz'

describe('collatz()', function(){

  it('should be a function', function(){
    expect(collatz).to.be.a('function')
  })

  it('returns \'1\' no matter what ordinal natural number is passed to it.', function(){
    expect(collatz(59)).to.equal(1)
    expect(collatz(30)).to.equal(1)
    expect(collatz(2)).to.equal(1)
  })

  it('returns error if a non number or non-positive whole number is passed to it.', function(){
    expect(collatz({a: false, b: _ => {}, c: [1,4]})).to.equal('Please use only ordinal natural numbers. (1,2,3...)')
    expect(collatz(5.67)).to.equal('Please use only ordinal natural numbers. (1,2,3...)')
    expect(collatz(Infinity)).to.equal('Please use only ordinal natural numbers. (1,2,3...)')
  })

})
