import React from "react";
import { Link } from "react-router-dom";
import PokemonList from "../components/list/PokemonList";

export default function List() {
  return (
    <div>
      <PokemonList />
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}
