import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
`;

const Col = styled.div`
  display: flex;
  jusity-content: center;
  align-items: center;
  flex-direction: column;
  background: ${(props) => (props.darkNess ? "black" : null)};
`;

const Row = styled.div`
  display: flex;
  jusity-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const PokemonTile = styled.div`
  margin: 10px;
  display: flex;
  jusity-content: center;
  align-items: center;
  flex-direction: column;
  background: #d5e9f1;
  border-radius: 30px;
  padding: 20px;
  &:hover {
    transform: scale(1.05);
  }
`;

const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/";

export const PokemonPage = () => {
  const [pokemons, setPokemons] = useState({ data: [], loading: false });
  const getPokemons = async (num) => {
    for (var i = 1; i <= num; i++) {
      const res = await fetch(`${pokeApiUrl}${i}`); //https://pokeapi.co/api/v2/pokemon/1-num
      const json = await res.json(); // jangan lupa
      setPokemons((prev) => ({ data: [...prev.data, json], loading: true }));
    }
    setPokemons((prev) => ({ data: prev.data, loading: false }));
  };

  useEffect(async () => {
    setPokemons((prev) => ({ data: prev.data, loading: true }));
    await getPokemons(30);
  }, []);

  return (
    <Row>
      {pokemons.loading ? ( // if loading : return image
        <img src="https://i.pinimg.com/originals/fc/ac/9a/fcac9a80651c20cfde5d41d430016ac6.gif" />
      ) : (
        // else display pokemon
        pokemons &&
        pokemons.data.map((pokemon) => {
          return (
            <PokemonTile>
              {pokemon.name}
              <img src={pokemon.sprites.front_default} />
            </PokemonTile>
          );
        })
      )}
    </Row>
  );
};
