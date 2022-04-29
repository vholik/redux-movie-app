import { combineReducers } from "redux";
import { MoviesReducer } from "./MoviesReducer";
import detailReducer from "./detailReducer";
import { searchReducer } from "./searchReducer";
const rootReducer = combineReducers({
  movies: MoviesReducer,
  detail: detailReducer,
  search: searchReducer,
});

export default rootReducer;
