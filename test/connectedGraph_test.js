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
    const graphC = {
      'a': ['b','c'],
      'b': ['a'],
      'c': ['a'],
      'd': ['e'],
      'e': ['d'],
    }
    const graphD = {
      'a': []
    }
    const graphE = {
      'a': [],
      'b': []
    }

    let a = connectedGraph(graphA)
    let b = connectedGraph(graphB)
    let c = connectedGraph(graphC)
    let d = connectedGraph(graphD)
    let e = connectedGraph(graphE)
    
    expect(a).to.equal(true)
    expect(b).to.equal(false)
    expect(c).to.be.false
    expect(d).to.be.true
    expect(e).to.be.false
  })
})
