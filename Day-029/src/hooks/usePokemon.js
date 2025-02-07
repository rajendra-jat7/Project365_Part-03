import { useState, useEffect } from "react";
import axios from "axios";

const usePokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPokemon = async () => {
    setLoading(true);
    try {
      const randomId = Math.floor(Math.random() * 151) + 1; // Get Pokémon ID (1-151)
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      setPokemon({
        name: res.data.name,
        image: res.data.sprites.other["official-artwork"].front_default,
        type: res.data.types.map((t) => t.type.name).join(", "),
      });
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { pokemon, loading, fetchPokemon };
};

export default usePokemon;
