import React from "react";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import useAxios from "./hooks/useAxios";

/** //* Step Four: useAxios in PokeDex
PokeDex also make AJAX requests, but this one’s a bit trickier. PlayingCardList makes a request to the same endpoint every time, but the endpoint in PokeDex depends on the name of the pokemon.

Figure out a way to modify your useAxios hook so that when you call useAxios you can just provide a base url, and when you want to add to your array of response data in state, you can provide the rest of the url.

Once you’ve done this, refactor PokeDex to use useAxios. Make sure PlayingCardList still works too! */

/** //* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */

function PokeDex() {
  const [pokemon, addPokemon, clearPokemon] = useAxios(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>

        {/* useAxios(addResponse(restOfURL)) 
        restOfURL is "name" which can be further found in PokemonSelect.js */}

        <PokemonSelect add={addPokemon} />
        <button onClick={clearPokemon}>Delete the pokemon!</button>
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map((cardData) => (
          <PokemonCard
            key={cardData.id}
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map((stat) => ({
              value: stat.base_stat,
              name: stat.stat.name,
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
