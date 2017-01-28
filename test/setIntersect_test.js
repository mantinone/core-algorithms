import { expect } from 'chai'
import setIntersect from '../src/setIntersect'

describe('setIntersect()', function(){

  it('should be a function', function(){
    expect(setIntersect).to.be.a('function')
  })

  it('return elements shared by two sets', function() {
    const a = [2, 1, 3, 4]
    const b = [2, 4, 6, 8]
    const c = [7, 9, 10]
    const d = ['goats', 'apples', false]
    const e = ['goats', 7, 4]
    expect(setIntersect(a,c)).to.eql([])
    expect(setIntersect(a, b)).to.eql([2, 4])
    expect(setIntersect(d, e)).to.eql(['goats'])
  })

  it('should use emtpy sets when no argument are given', () => {
    expect(setIntersect([1,2,3])).to.eql([])
    expect(setIntersect()).to.eql([])
  })

  it('should return useful errors', function() {
    expect(setIntersect(null)).to.equal('Cannot union null values')
    expect(setIntersect([1,3],[1,[4,2],7])).to.equal('No nested arrays or objects')
    expect(setIntersect([1,[4,2],3],[1,7])).to.equal('No nested arrays or objects')
    expect(setIntersect([1,{'four':4},3],[1,7])).to.equal('No nested arrays or objects')


    expect(setIntersect(1,2)).to.equal('Please use Arrays')
  })

})
