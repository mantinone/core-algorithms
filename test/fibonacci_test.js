import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', () => {

  it('should be a function', () => {
    expect(fibonacci).to.be.a('function')
  })

  it('Small numbers access the intial array directly', () => {
    expect(fibonacci(1)).to.eql([0])
    expect(fibonacci(2)).to.eql([0,1])
  })

  it('should return a fibonacci sequence out to a given position', () => {
    expect(fibonacci(10)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  })

  it('Should return a useful error message', () => {
    expect(fibonacci(0)).to.equal('Invalid Input. Please input a positive non-zero integer')
    expect(fibonacci(-1)).to.equal('Invalid Input. Please input a positive non-zero integer')
    expect(fibonacci(4.5)).to.equal('Invalid Input. Please input a positive non-zero integer')
    expect(fibonacci("fish")).to.equal('Invalid Input. Please input a positive non-zero integer')

  })

})
