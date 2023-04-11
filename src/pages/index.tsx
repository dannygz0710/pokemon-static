import { GetStaticProps, NextPage } from 'next'
import { Grid } from "@nextui-org/react"

import { Layout } from "@/components/layouts";
import { pokeApi } from '@/api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import PokemonCard from '@/components/pokemons/PokemonCard';


interface Props {
  pokemons: SmallPokemon[]
}


const HomePage: NextPage<Props> = ({ pokemons }) => {


  return (

    <Layout title="Pokemons List">
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map((pokemon) =>
          (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </Grid.Container>


    </Layout>

  )

}



export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  console.log(data)

  const pokemons: SmallPokemon[] = data.results.map((poke, index) => {
    return {
      ...poke,
      id: index + 1,
      url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    }
  }

  )

  return {
    props: {
      pokemons
    }
  }
}
export default HomePage



