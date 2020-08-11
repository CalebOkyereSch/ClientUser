import { SEARCH_ITEM, SEARCH_LOADING, GET_SEARCH } from "../actions/types";

const initialState = {
  loading: false,
  search: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_SEARCH:
      return {
        ...state,
        search: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
