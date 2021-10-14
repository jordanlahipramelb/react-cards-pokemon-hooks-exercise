import React from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";
import { v4 as uuid } from "uuid";

/* //! Step Three: useAxios in PlayingCardList
In the PlayingCardList component, we initialize an empty array in state, and add to it via an AJAX request we make with axios. Since we use axios in a few components, let’s move this logic into a function called useAxios.

useAxios should take in a URL, and similar to useState, it should return an array with two elements. The first element is an array of data obtained from previous AJAX requests (since we will add to this array, it’s a piece of state). The second element is a function that will add a new object of data to our array.

Once you’ve written this hook, refactor PlayingCardList to use this custom hook. (Don’t worry about PokeDex for now - that’s coming in the next part! */

/** //* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  /** In useAxios
   * return [responses, addResponse, clearResponse]
   * Below is destructured to match each index of above return */
  const [cards, addCard, clearCards] = useAxios(
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        {/* add callback function to this button in order to addResp to array */}
        <button onClick={() => addCard()}>Add a playing card!</button>
        <button onClick={clearCards}>Clear the table</button>
      </div>
      <div className="PlayingCardList-card-area">
        {/* map through cards in responses array */}
        {cards.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
