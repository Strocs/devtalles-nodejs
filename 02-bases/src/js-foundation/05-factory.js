// const { getAge, getUUID } = require('../plugins')

// const obj1 = { name: 'Ignacio', birthDate: '05/10/1990' }
// const obj2 = { name: 'Carla', birthDate: '01/25/1992' }

const buildMakePerson = ({ getUUID, getAge }) => {
  return ({ name, birthDate }) => {
    return {
      id: getUUID(),
      name,
      birthDate,
      age: getAge(birthDate)
    }
  }
}

module.exports = {
  buildMakePerson
}
