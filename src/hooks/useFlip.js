import { useState } from "react";

const useFlip = (initialState = true) => {
  const [isFacingUp, setIsFacingUp] = useState(initialState);

  const toggleIsFacingUp = () => {
    setIsFacingUp((isUp) => !isUp);
  };

  //! The first element is the current flip state of the card, and the second element is a function that will toggle the flip state.
  return [isFacingUp, toggleIsFacingUp];
};

export default useFlip;
