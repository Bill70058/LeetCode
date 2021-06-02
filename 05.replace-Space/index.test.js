const replaceSpace = require('./index.js')

describe('replace space', () => {
  test('replace space', () => {
    expect(replaceSpace('We are happy.')).toEqual("We%20are%20happy.")
  })
})