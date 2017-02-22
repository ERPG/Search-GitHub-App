//testing the functions

describe('a function that creates content', function () {
  it('should exist', function () {
    expect(createHTML).toBeDefined()
  })
   it('should return length of the function', function () {
    var result = createHTML([])
    var len = result.length
    expect(len).toEqual(0)
  })
    it('should return a string', function () {
    var result = createHTML([])
    expect(typeof result).toEqual('string')
  })

})

describe('a function that get the users images', function () {
  it('should exist', function () {
    expect(getImage).toBeDefined()
  })

})

describe('a function that catch errors', function () {
  it('should exist', function () {
    expect(logError).toBeDefined()
  })

})

describe('a function that append to DOM', function () {
  it('should exist', function () {
    expect(appendToDom).toBeDefined()
    })
})




