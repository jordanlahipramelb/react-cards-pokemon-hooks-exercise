import { v4 as uuid } from "uuid";

/* Select a random element from values array. */
function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}

/** Extract front image and back image of pokemon, and stat information */
const extractPokemon = (cardData) => {
  return {
    id: uuid(),
    front: cardData.sprites.front_default,
    back: cardData.sprites.back_default,
    name: cardData.name,
    stats: cardData.stats.map((stat) => ({
      value: stat.base_stat,
      name: stat.stat.name,
    })),
  };
};

export { choice, extractPokemon };
