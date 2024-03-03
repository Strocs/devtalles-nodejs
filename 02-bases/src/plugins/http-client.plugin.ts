// const { default: axios.default } = require('axios')

import axios from 'axios'

export const httpClientPlugin = {
  get: async (url: string) => {
    // const resp = await axios.default.get(url)
    const resp = await axios.get(url)
    return resp.data
  },
  post: async (url: string, data: any) => {
    throw new Error('Not implemented')
  },
  put: async (url: string, data: any) => {
    throw new Error('Not implemented')

  },
  delete: async (url: string) => {
    throw new Error('Not implemented')
  }
}

// module.exports = {
//   http: httpClientPlugin
// }
