import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', function(){

  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })

  it('returns the factorial of a number', function(){
    expect(factorial(4)).to.equal(24)
    expect(factorial(5)).to.equal(120)
    expect(factorial(6)).to.equal(720)
  })

  it('returns an error message if not a number', function(){
    expect(factorial(_ => { let pointless = 'nothing'})).to.equal('Please enter a number')
  })
})
