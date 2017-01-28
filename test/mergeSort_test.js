import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe('mergeSort()', function(){

  it('should be a function', function(){
    expect(mergeSort).to.be.a('function')
  })

  it('should return a sorted numerical array', function() {
    const a = [8,4,5,1,3,9,7,2,6]
    const b = [8]
    const c = [7,2,1]
    const d = ["goats", "bigBen", "ardvarks", "dungeon", "cat"]
    expect(mergeSort(a)).to.eql([1,2,3,4,5,6,7,8,9])
    expect(mergeSort(b)).to.eql([8])
    expect(mergeSort(c)).to.eql([1,2,7])
    expect(mergeSort(d)).to.eql(["ardvarks", "bigBen", "cat", "dungeon", "goats"])
  })
})
