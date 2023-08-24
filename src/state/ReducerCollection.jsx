import matchReducer from "./MatchReducer";
import playerlistReducer from "./PlayerlistReducer";
import profileReducer from "./ProfileReducer";
import accountReducer from "./AccountReducer";
import { combineReducers } from "redux";

const collectedReducers = combineReducers({
   list: playerlistReducer,
   match: matchReducer,
   profile: profileReducer,
   account: accountReducer,
});

export default collectedReducers;
