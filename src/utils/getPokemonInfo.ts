import pokeApi from "@/api/pokeApi";
import { Pokemon } from "@/interfaces";



export const getPokemonInfo = async (nameOrId: string) => {

    
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    if (!data) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch (error) {
    return null;
  }
};
