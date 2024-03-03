import { CLIENT_RENEG_LIMIT } from "tls";
import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("05-factory", () => {

  const getUUID = () => '1234'
  const getAge = () => 35

  test('buildMakePerson should return a function', () => {
    const makePerson = buildMakePerson({ getUUID, getAge })

    expect(typeof makePerson).toBe('function')
    // expect(makePerson).toBeInstanceOf(Function)
  })

  test('makePerson should return a person', () => {
    const makePerson = buildMakePerson({ getUUID, getAge })

    const johnDoe = makePerson({ name: 'John Doe', birthDate: '1985-10-21' })

    expect(johnDoe).toEqual({ id: '1234', name: 'John Doe', birthDate: '1985-10-21', age: 35 })

  })



})