// const { http } = require('../plugins')

import { httpClient } from "../plugins"

export const getPokemonById = async (id: string | number): Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    // return fetch(url)
    //   .then(res => res.json())
    //   .then(pokemon => pokemon.name)

    // const resp = await fetch(url)
    // const pokemon = await resp.json()

    const pokemon = await httpClient.get(url)
    return pokemon.name

  } catch (error) {
    throw `Pokemon not found with id ${id}`
  }




}

// module.exports = getPokemonById
