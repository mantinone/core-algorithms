import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'

describe('setSymmetricDifference()', function(){

  it('should be a function', function(){
    expect(setSymmetricDifference).to.be.a('function')
  })

  it('should combine two sets without duplicating elements', function() {
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    const c = [7, 9, 10]
    const d = ['goats', 'apples', 7, false]
    const e = ['goats', 7, 4, 'fish']
    expect(setSymmetricDifference(a, c)).to.eql([ 1, 2, 3, 4, 7, 9, 10])
    expect(setSymmetricDifference(a, b)).to.eql([1, 3, 6, 8])
    expect(setSymmetricDifference(d, e)).to.eql([ 'apples', false, 4, 'fish'])
  })

  it('should use emtpy sets when no argument are given', () => {
    expect(setSymmetricDifference([1,2,3])).to.eql([1,2,3])
    expect(setSymmetricDifference()).to.eql([])
  })

  it('should return useful errors', function() {
    expect(setSymmetricDifference(null)).to.equal('Cannot union null values')
    expect(setSymmetricDifference([1,3],[1,[4,2],7])).to.equal('No nested arrays or objects')
    expect(setSymmetricDifference([1,[4,2],3],[1,7])).to.equal('No nested arrays or objects')
    expect(setSymmetricDifference([1,{'four':4},3],[1,7])).to.equal('No nested arrays or objects')
    expect(setSymmetricDifference(1,2)).to.equal('Please use Arrays')
  })

})
