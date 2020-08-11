// Add to Cart  and  view item
import axios from "axios";
import { GET_ERRORS, SEARCH_LOADING, GET_SEARCH } from "./types";

// get current user cart

export const searchLocation = (location) => (dispatch) => {
  dispatch(setSearchLoading());
  axios
    .post(`/api/users/search-location`, location)
    .then((res) =>
      dispatch({
        type: GET_SEARCH,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_SEARCH,
        payload: null,
      })
    );
};

export const classicSearch = (prodData) => (dispatch) => {
  dispatch(setSearchLoading());
  axios
    .post("api/users/search/all", prodData)
    .then((res) => {
      dispatch({
        type: GET_SEARCH,
        payload: res.data,
      });
    })

    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Cart Loading

export const setSearchLoading = () => {
  return {
    type: SEARCH_LOADING,
  };
};

// export const addToCart = (item, user, history) => (dispatch) => {
//   axios
//     .post(`/api/products/${item}`, user)
//     .then((res) => {
//       dispatch({
//         type: SET_CURRENT_USER,
//         payload: res.data,
//       });
//       history.push("/cart");
//     })
//     .catch((err) =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       })
//     );
// };
