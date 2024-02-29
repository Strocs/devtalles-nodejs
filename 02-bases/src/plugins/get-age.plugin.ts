// const getAgePlugin = require('get-age')

export const getAge = (birthDate: string) => {
  // return getAgePlugin(birthDate)
  return new Date().getFullYear() - new Date(birthDate).getFullYear()
}

