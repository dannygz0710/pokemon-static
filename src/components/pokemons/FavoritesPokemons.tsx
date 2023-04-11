import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';


interface Props {
pokemons :  number[]

}


export const FavoritesPokemons  = ({ pokemons }:Props) => {
  return (
    <Grid.Container 
    gap={ 2 }
    direction="row"
    justify="flex-start"
     >
    {
      pokemons.map( id  =>(
        <FavoriteCardPokemon id={ id }  key={ id }/>
        ) )
    }
    </Grid.Container>
  )
}
