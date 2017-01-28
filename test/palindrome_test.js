import { expect } from 'chai'
import palindrome from '../src/palindrome'

describe('palaindrome()', function(){

  it('should be a function', function(){
    expect(palindrome).to.be.a('function')
  })

  it('Finds if a single word is a palindrome', () => {
    expect(palindrome('radar')).to.be.true

    expect(palindrome('banana')).to.be.false
  })

  it('Strips whitespace and punctuation when passed phrases', () => {
    expect(palindrome('A man, a plan, a canal: Panama')).to.be.true

    expect(palindrome('Racecar radar!')).to.be.false
  })

  it('Returns appropriate error messages', () => {
    expect(palindrome(50)).to.equal('Please enter a string')

    expect(palindrome(null)).to.equal('Please enter a string')
  })
})



//isPalindrome('A man, a plan, a canal: Panama')
// => true
