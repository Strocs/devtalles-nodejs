import { httpClient } from "../../src/plugins";

describe('httpClient', () => {
  test('should return a string', async () => {
    const data = await httpClient.get('https://jsonplaceholder.typicode.com/todos/1')

    expect(data).toEqual({ userId: 1, id: 1, title: 'delectus aut autem', completed: expect.any(Boolean) })

  })

  test('should have POST, PUT and DELETE', () => {
    expect(httpClient.post).toBeInstanceOf(Function)
    expect(httpClient.put).toBeInstanceOf(Function)
    expect(httpClient.delete).toBeInstanceOf(Function)

  })
})