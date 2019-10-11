const should = chai.should()
describe('Test fizzbuzz function', function () {
  it(' input: 9, expect output : Fizz', function () {
    const result = fizzbuzz(9)
    result.should.be.equal('Fizz')
  })
  it(' input: 5, expect output : Buzz', function () {
    const result = fizzbuzz(5)
    result.should.be.equal('Buzz')
  })
  it(' input: 15, expect output : FizzBuzz', function () {
    const result = fizzbuzz(15)
    result.should.be.equal('FizzBuzz')
  })
  it(' input: 4, expect output : 4', function () {
    const result = fizzbuzz(4)
    result.should.be.equal(4)
  })
})