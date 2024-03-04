import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

export const yarg = yargs(hideBin(process.argv))
  .options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base of the multiplication table',
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Limit of the multiplication table',
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show the multiplication table',
  })
  .options('n', {
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'File name',
  })
  .option('d', {
    alias: 'destination',
    type: 'string',
    default: './outputs',
    describe: 'File destination ',
  })
  .option('t', {
    alias: 'type',
    type: 'string',
    default: 'txt',
    describe: 'File type',
  })
  .check((argv, options) => {
    if (argv.b < 1) throw 'The base must be greater than 0'
    if (isNaN(argv.b)) throw 'The base must be a number'
    return true
  })
  .parseSync()