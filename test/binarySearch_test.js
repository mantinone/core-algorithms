import { expect } from 'chai'
import binarySearch from '../src/binarySearch'

describe('binarySearch()', function(){

  it('should be a function', function(){
    expect(binarySearch).to.be.a('function')
  })

  it('should return the index of the found element', () => {
    const a = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    expect(binarySearch( a, 45 )).to.equal(8)
    expect(binarySearch( a, 5 )).to.equal(0)
    expect(binarySearch( a, 15 )).to.equal(2)
    expect(binarySearch( a, 50 )).to.equal(9)
  })

  it('Should say if a value is not found', () => {
    const a = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    expect(binarySearch( a, 43)).to.equal('Not found')
    expect(binarySearch( a, 1)).to.equal('Not found')
    expect(binarySearch( a, 60)).to.equal('Not found')
  })

})
