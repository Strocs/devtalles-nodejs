// const { default: axios.default } = require('axios')

import axios from 'axios'

export const httpClientPlugin = {
  get: async (url: string) => {
    // const resp = await axios.default.get(url)
    const resp = await axios.get(url)
    return resp.data
  }
}

// module.exports = {
//   http: httpClientPlugin
// }
