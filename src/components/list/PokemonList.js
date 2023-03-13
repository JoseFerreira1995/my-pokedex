import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function PokemonList(props) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        setPokemonData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {pokemonData &&
        pokemonData.results.map((pokemon, index) => (
          <div key={index}>
            <h2>{pokemon.name}</h2>
          </div>
        ))}
    </div>
  );
}
