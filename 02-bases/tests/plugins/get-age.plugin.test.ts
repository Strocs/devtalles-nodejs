import { getAge } from "../../src/plugins";

describe("getAge", () => {
  test('should return an age', () => {
    const birthDate = '1990-05-10'
    const age = getAge(birthDate)

    expect(typeof age).toBe('number')

  })


  test('should return current age', () => {
    const birthDate = '1990-05-10'
    const age = getAge(birthDate)

    const calculatedAge = new Date().getFullYear() - new Date(birthDate).getFullYear()

    expect(age).toBe(calculatedAge)
  })


  test('getAge should return 0 years', () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1992)
    const birthDate = '1992-01-25'
    const age = getAge(birthDate)

    expect(age).toBe(0)
    expect(spy).toHaveBeenCalled()
  })
})