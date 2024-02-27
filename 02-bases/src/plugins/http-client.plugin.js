const { default: axios } = require('axios')

const httpClientPlugin = {
  get: async url => {
    const resp = await axios.get(url)
    return resp.data
  }
}

module.exports = {
  http: httpClientPlugin
}
