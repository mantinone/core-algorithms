import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe('setUnion()', function(){

  it('should be a function', function(){
    expect(setUnion).to.be.a('function')
  })

  it('should combine two sets without duplicating elements', function() {
    const a = [2, 1, 3, 4]
    const b = [2, 4, 6, 8]
    const c = [7, 9, 10]
    const d = ['goats', 'apples', false]
    const e = ['goats', 7, 4]
    expect(setUnion(a,c)).to.eql([2, 1, 3, 4, 7, 9, 10])
    expect(setUnion(a, b)).to.eql([2, 1, 3, 4, 6, 8])
    expect(setUnion(d, e)).to.eql(['goats', 'apples', false, 7, 4])
  })

  it('should use emtpy sets when no argument are given', () => {
    expect(setUnion([1,2,3])).to.eql([1,2,3])
    expect(setUnion()).to.eql([])
  })

  it('should return useful errors', function() {
    expect(setUnion(null)).to.equal('Cannot union null values')
    expect(setUnion([1,3],[1,[4,2],7])).to.equal('No nested arrays or objects')
    expect(setUnion([1,[4,2],3],[1,7])).to.equal('No nested arrays or objects')
    expect(setUnion([1,{'four':4},3],[1,7])).to.equal('No nested arrays or objects')


    expect(setUnion(1,2)).to.equal('Please use Arrays')
  })

})
