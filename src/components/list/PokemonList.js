import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import PokemonCard from "../card/PokemonCard";
import "./PokemonList.css";

export default function PokemonList(props) {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonSprites, setPokemonSprites] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        setPokemonData(response.data.results);
        return response.data.results;
      })
      .then((pokemon) => {
        const spriteRequest = pokemon.map((p) =>
          axios.get(`https://pokeapi.co/api/v2/pokemon/${p.name}`)
        );
        return Promise.all(spriteRequest);
      })
      .then((responses) => {
        const spriteData = responses.map((r) => r.data.sprites.front_default);
        setPokemonSprites(spriteData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="pokemon_list">
      {pokemonData.map((pokemon, index) => (
        <PokemonCard
          key={index}
          pokemon={pokemon}
          sprite={pokemonSprites[index]}
        />
      ))}
    </div>
  );
}
