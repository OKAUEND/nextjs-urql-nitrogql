"use client"

import { Client, fetchExchange, gql } from "urql"

const client = new Client({
  url: "https://beta.pokeapi.co/graphql/v1beta",
  exchanges: [fetchExchange],
})

const getPokemons = gql(`
  query getPokemons {
    pokemon_v2_pokemon(limit:30, where:{pokemon_species_id: {_gt: 500}}) {
      name
      id
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`)

const useUrql = async () => {
  const result = await client.query(getPokemons, {}).toPromise()
  console.log({ result })
  return result
}

export const UrqlPage = () => {
  const result = useUrql()

  return <>TEST</>
}
