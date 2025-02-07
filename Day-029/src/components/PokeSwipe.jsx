import { useSwipeable } from "react-swipeable";
import usePokemon from "../hooks/usePokemon";
import "./PokeSwipe.css";

const PokeSwipe = () => {
  const { pokemon, loading, fetchPokemon } = usePokemon();

  const handleSwipe = (direction) => {
    if (direction === "Left") {
      console.log("❌ Disliked:", pokemon.name);
    } else if (direction === "Right") {
      console.log("❤️ Liked:", pokemon.name);
    }
    fetchPokemon();
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("Left"),
    onSwipedRight: () => handleSwipe("Right"),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="poke-container" {...handlers}>
      <h2>🔥 PokeSwipe</h2>
      {loading ? (
        <p>Loading Pokémon...</p>
      ) : (
        pokemon && (
          <div className="poke-card">
            <img src={pokemon.image} alt={pokemon.name} />
            <h3>{pokemon.name.toUpperCase()}</h3>
            <p>Type: {pokemon.type}</p>
            <div className="buttons">
              <button className="dislike" onClick={() => handleSwipe("Left")}>❌ Dislike</button>
              <button className="like" onClick={() => handleSwipe("Right")}>❤️ Like</button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default PokeSwipe;
