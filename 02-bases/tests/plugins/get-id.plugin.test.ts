import { getUUID } from "../../src/plugins";

describe('getUUID', () => {
  test('should return an uuid', () => {
    const uuid = getUUID()

    expect(typeof uuid).toBe('string')
    expect(uuid.length).toBe(36)
  })
})