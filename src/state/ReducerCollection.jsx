import matchReducer from "./MatchReducer";
import playerlistReducer from "./PlayerlistReducer";
import socketReducer from "./SocketReducer";
import { combineReducers } from "redux";

const collectedReducers = combineReducers({
   list: playerlistReducer,
   socket: socketReducer,
   match: matchReducer,
});

export default collectedReducers;
