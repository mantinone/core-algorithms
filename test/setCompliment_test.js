import { expect } from 'chai'
import setCompliment from '../src/setCompliment'

describe('setCompliment()', function(){

  it('should be a function', function(){
    expect(setCompliment).to.be.a('function')
  })

  it('should combine two sets without duplicating elements', function() {
    const a = [2, 1, 3, 4]
    const b = [2, 4, 6, 8]
    const c = [7, 9, 10]
    const d = ['goats', 'apples', false]
    const e = ['goats', 7, 4, 'fish']
    expect(setCompliment(a,c)).to.eql([ 7, 9, 10])
    expect(setCompliment(a, b)).to.eql([6, 8])
    expect(setCompliment(d, e)).to.eql([ 7, 4, 'fish'])
  })

  it('should use emtpy sets when no argument are given', () => {
    expect(setCompliment([1,2,3])).to.eql([])
    expect(setCompliment()).to.eql([])
  })

  it('should return useful errors', function() {
    expect(setCompliment(null)).to.equal('Cannot union null values')
    expect(setCompliment([1,3],[1,[4,2],7])).to.equal('No nested arrays or objects')
    expect(setCompliment([1,[4,2],3],[1,7])).to.equal('No nested arrays or objects')
    expect(setCompliment([1,{'four':4},3],[1,7])).to.equal('No nested arrays or objects')
    expect(setCompliment(1,2)).to.equal('Please use Arrays')
  })

})
