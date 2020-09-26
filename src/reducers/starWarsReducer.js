import { SUCCESS } from "../actions";
const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        characters: action.payload,
      };
    default:
      return state;
  }
};
