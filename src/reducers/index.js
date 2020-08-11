import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import itemReducer from "./itemReducer";
import searchReducer from "./searchReducers";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  product: productReducer,
  cart: cartReducer,
  item: itemReducer,
  search: searchReducer,
});
