import { expect } from 'chai'
import connectedGraph from '../src/connectedGraph'

describe('connectedGraph()', function(){

  it('should be a function', function(){
    expect(connectedGraph).to.be.a('function')
  })

  it('returns weather or not all points are connected', function(){
    const graphA = {
      'a': ['b', 'c'],
      'b': ['a', 'd'],
      'c': ['a', 'd'],
      'd': ['b', 'c']
    }
    const graphB = {
      'a': ['b'],
      'b': ['a'],
      'c': ['d'],
      'd': ['c']
    }

    let a = connectedGraph(graphA)
    let b = connectedGraph(graphB)
    expect(a).to.equal(true)
    expect(b).to.equal(false)
  })
})
