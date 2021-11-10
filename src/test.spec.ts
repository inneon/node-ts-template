describe('unit test placeholder', () => {
  it('should run a test', () => {
    const actual = 'hello' + ' ' + 'world'
    const expected = 'hello world'
    expect(actual).toEqual(expected)
  })

  it('warns on the console', () => {
    console.warn('warn')
  })

  it('error on the console', () => {
    console.error('error')
  })
})
