import { useState } from "react";
import axios from "axios";

/* //* Step Three: useAxios in PlayingCardList
In the PlayingCardList component, we initialize an empty array in state, and add to it via an AJAX request we make with axios. Since we use axios in a few components, let’s move this logic into a function called useAxios.

useAxios should take in a URL, and similar to useState, it should return an array with two elements. The first element is an array of data obtained from previous AJAX requests (since we will add to this array, it’s a piece of state). The second element is a function that will add a new object of data to our array.

Once you’ve written this hook, refactor PlayingCardList to use this custom hook. (Don’t worry about PokeDex for now - that’s coming in the next part! */

/* //* Step Four: useAxios in PokeDex
PokeDex also make AJAX requests, but this one’s a bit trickier. PlayingCardList makes a request to the same endpoint every time, but the endpoint in PokeDex depends on the name of the pokemon.

Figure out a way to modify your useAxios hook so that when you call useAxios you can just provide a base url, and when you want to add to your array of response data in state, you can provide the rest of the url.

Once you’ve done this, refactor PokeDex to use useAxios. Make sure PlayingCardList still works too! */

const useAxios = (baseURL) => {
  // start empty; if we get data back, the responses state is updated
  const [responses, setResponses] = useState([]);

  // adds the res.data obj to the array or responses
  const addResponse = async (restOfURL = "") => {
    const response = await axios.get(`${baseURL}${restOfURL}`);
    setResponses((data) => [...data, response.data]);
  };

  // clear all the responses
  const clearResponses = () => setResponses([]);

  return [responses, addResponse, clearResponses];
};

export default useAxios;
