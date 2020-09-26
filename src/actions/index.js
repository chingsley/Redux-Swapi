// we'll need axios

import Axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = "FETCHING";
export const ERROR = "ERROR";
export const SUCCESS = "SUCCESS";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/` https://swapi.dev/api/people
// remember that now we have controll over our thunk-based action creator
export const fetchCharacters = () => (dispatch) => {
  Axios.get("https://swapi.dev/api/people/")
    .then(({ data }) => {
      dispatch({ type: SUCCESS, payload: data.results });
    })
    .catch((error) => {
      console.log(error);
    });
};
