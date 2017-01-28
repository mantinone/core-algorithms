import { expect } from 'chai'
import closestPair from '../src/closestPair'

describe('closestPair()', function(){

  it('should be a function', function(){
    expect(closestPair).to.be.a('function')
  })

  it('should return a sorted numerical array', function() {
    const points = [
      [2,1],
      [4,0],
      [-1,0],
      [5,3],
      [-2,5],
      [3,-3],
      [-2,0],
      [3,4],
      [5,-4],
      [0,-2]
    ]
    let result = closestPair(points)
    expect(result).to.eql({point1: [-1, 0], point2: [-2, 0], distance: 1})
  })
})
