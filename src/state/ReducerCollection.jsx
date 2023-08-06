import matchReducer from "./MatchReducer";
import playerlistReducer from "./PlayerlistReducer";
import profileReducer from "./ProfileReducer";
import { combineReducers } from "redux";

const collectedReducers = combineReducers({
   list: playerlistReducer,
   match: matchReducer,
   profile: profileReducer,
});

export default collectedReducers;
