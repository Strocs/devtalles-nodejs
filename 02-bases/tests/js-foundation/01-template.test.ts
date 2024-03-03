import { emailTemplate } from "../../src/js-foundation/01-template"

describe("emailTemplate", () => {
  test('emailTemplate should contain a greeting', () => {
    expect(emailTemplate).toContain("Hi, ")
  })

  test('emailTemplate should contain {{name}} and {{email}}', () => {
    expect(emailTemplate).toMatch(/{{name}}/)
    expect(emailTemplate).toContain("{{email}}")
  })

})