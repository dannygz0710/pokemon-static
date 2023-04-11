import { FC } from "react";
import { Card, Grid } from "@nextui-org/react";
import { SmallPokemon } from "@/interfaces";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Grid xs={ 6 } sm={ 4 } md={ 2 } xl={  1} key={ pokemon.id }>
      <Card isHoverable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            onClick={ onClick }
            src={ pokemon.img }
            width={ 100 }
            height={ 100 }
            alt={ pokemon.name }
          />
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
