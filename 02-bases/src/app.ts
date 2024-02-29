// const { emailTemplate } = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring')
// const { getUserById } = require('./js-foundation/03-callbacks')
// const { getUserById } = require('./js-foundation/03-callbacks')
// const { getAge, getUUID, loggerPlugin, buildLogger } = require('./plugins')
// const { buildMakePerson } = require('./js-foundation/05-factory')
// const getPokemonById = require('./js-foundation/06-promises')

import { buildMakePerson } from "./js-foundation/05-factory";
import { getPokemonById } from "./js-foundation/06-promises";
import { getAge, getUUID } from "./plugins";
import { buildLogger } from "./plugins/logger.plugin";


//! Referencia a la función factory y uso
const makePerson = buildMakePerson({ getUUID, getAge })

const obj1 = { name: 'Ignacio', birthDate: '05/10/1990' }
const obj2 = { name: 'Carla', birthDate: '01/25/1992' }

const ignacio = makePerson(obj1)
const carla = makePerson(obj2)

console.log({ ignacio, carla })

//* Promesas
getPokemonById(1)
  .then(pokemon => console.log({ pokemon }))
  .catch(err => console.error('Id no existe'))
  .finally(() => console.log('Terminado'))

//* Winston
const logger = buildLogger('app.js')

logger.log('Hola Mundo')
logger.error('Algo malo')

