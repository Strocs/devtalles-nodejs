import { getUserById } from "../../src/js-foundation/03-callbacks";


describe('test on getUserById', () => {
  test('getUserById should return an error if user does not exist', () => {
    const id = 10;

    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();
    })
  })

  test('getUserById should return the user John Doe', () => {

    getUserById(1, (err, user) => {
      expect(err).toBeUndefined()
      expect(user).toEqual({ id: 1, name: 'John', age: 20 })
    })
  })
})

