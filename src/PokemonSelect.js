import React, { useState } from "react";
import pokemonList from "./pokemonList";
import { choice } from "./helpers";

/* Select element to choose from common pokemon. */

// "add" function from parent component (Pokedex; addPokemon)
function PokemonSelect({ add, pokemon = pokemonList }) {
  const [pokeIdx, setPokeIdx] = useState(0);
  const handleChange = (evt) => {
    setPokeIdx(evt.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {pokemon.map((p, idx) => (
          <option key={idx} value={idx}>
            {p}
          </option>
        ))}
      </select>
      {/* "add" from Pokedex.js which comes from useAxios */}
      <button onClick={() => add(pokemon[pokeIdx])}>Catch one!</button>

      {/* random choice from helpers.js */}
      <button onClick={() => add(choice(pokemon))}>I'm feeling lucky</button>
    </div>
  );
}

export default PokemonSelect;
