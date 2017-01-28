import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort'

describe('bubbleSort()', function(){

  it('should be a function', function(){
    expect(bubbleSort).to.be.a('function')
  })

  it('should return a sorted numerical array', function() {
    const a = [8,4,5,1,3,9,7,2,6]
    const b = [8]
    const c = [7,2,1]
    const d = ["goats", "bigBen", "ardvarks", "dungeon", "cat"]
    expect(bubbleSort(a)).to.eql([1,2,3,4,5,6,7,8,9])
    expect(bubbleSort(b)).to.eql([8])
    expect(bubbleSort(c)).to.eql([1,2,7])
    expect(bubbleSort(d)).to.eql(["ardvarks", "bigBen", "cat", "dungeon", "goats"])
  })
})
