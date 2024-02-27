const { http } = require('../plugins')

const getPokemonById = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  // return fetch(url)
  //   .then(res => res.json())
  //   .then(pokemon => pokemon.name)

  // const resp = await fetch(url)
  // const pokemon = await resp.json()

  const pokemon = await http.get(url)
  return pokemon.name
}

module.exports = getPokemonById
