import { characters } from "../../src/js-foundation/02-destructuring";

describe('Destructuring', () => {
  test('characters should contain Flash and Superman', () => {
    expect(characters).toContain('Flash')
    expect(characters).toContain('Superman')
  })

  test('first character should be Flash, and second Superman', () => {
    expect(characters[0]).toBe('Flash')
    expect(characters[1]).toBe('Superman')
  })
})