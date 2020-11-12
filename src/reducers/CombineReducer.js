import {combineReducers} from "redux";
import CardReducer from "./CardReducer";

const CombineReducer = combineReducers({
  cards : CardReducer,
})
export default CombineReducer;