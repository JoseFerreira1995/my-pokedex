import { useState, useEffect } from "react";
import axios from "axios";

const usePokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(undefined);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        return response.data.results;
      })
      .then((pokemon) => {
        const spriteRequest = pokemon.map((p) =>
          axios.get(`https://pokeapi.co/api/v2/pokemon/${p.name}`)
        );
        return Promise.all(spriteRequest);
      })
      .then((responses) => {
        const spriteData = responses.map((r) => r.data);
        setPokemonData(spriteData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return {
    data: pokemonData,
    isLoading,
  };
};

export default usePokemonList;
