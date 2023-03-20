import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import PokemonCard from "../card/PokemonCard";
import "./PokemonList.css";
import usePokemonList from "../../hooks/usePokemonList/usePokemonList";


export default function PokemonList(props) {
  const { data, isLoading } = usePokemonList();

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="pokemon_list">
      {data.map((pokemon, index) => (
        <PokemonCard
          key={index}
          pokemon={pokemon}
          // sprite={pokemon.sprites.front_default}
        />
      ))}
    </div>
  );
}
