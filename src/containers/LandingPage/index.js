import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  font-size: 3rem;
`;

const Container = styled.div`
  display: flex;
  jusity-content: center;
  align-items: center;
  flex-direction: column;
  background: ${(props) => (props.darkNess ? "black" : null)};
`;

export const LandingPage = () => {
  const hello_world_en = "Hello World";
  const hello_world_id = "Halo Dunia";
  const testTilde = `${hello_world_en}, saya disini`;

  const [count, setCount] = useState(0);
  const [helloworld, setHelloWorld] = useState(hello_world_en);
  const [pokemonData, setPokemonData] = useState({
    name: "not found",
    abilities: [],
    speices: {
      url: "",
    },
  });

  const url = "https://pokeapi.co/api/v2/pokemon/ditto";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemonData(data);
      })
      .catch();
  }, []);

  return (
    <Container>
      <Title>{helloworld}</Title>
      <p>SBF PTI Minggu Ke-{count}</p>
      <button onClick={() => setHelloWorld(hello_world_id)}>
        change to indo
      </button>
      <button onClick={() => setHelloWorld(hello_world_en)}>
        change to english
      </button>

      <Container darkNess>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </Container>
      <Link to="/sbfseru">Ke Halaman SBF Seru</Link>
      <p>{pokemonData.name}</p>
      <p>{pokemonData.order}</p>
      <ul>
        {pokemonData.abilities.map((ability) => (
          <li>{ability.ability.name}</li>
        ))}
      </ul>
    </Container>
  );
};
