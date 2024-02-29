// const { getAge, getUUID } = require('../plugins')

// const obj1 = { name: 'Ignacio', birthDate: '05/10/1990' }
// const obj2 = { name: 'Carla', birthDate: '01/25/1992' }


interface BuildMakePersonOptions {
  getUUID: () => string
  getAge: (birthDate: string) => number
}

interface PersonOptions {
  name: string
  birthDate: string
}

export const buildMakePerson = ({ getUUID, getAge }: BuildMakePersonOptions) => {
  return ({ name, birthDate }: PersonOptions) => {
    return {
      id: getUUID(),
      name,
      birthDate,
      age: getAge(birthDate)
    }
  }
}

// module.exports = {
//   buildMakePerson
// }
