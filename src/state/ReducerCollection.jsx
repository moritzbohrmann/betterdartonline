import matchReducer from "./MatchReducer";
import playerlistReducer from "./PlayerlistReducer";
import profileReducer from "./ProfileReducer";
import socketReducer from "./SocketReducer";
import { combineReducers } from "redux";

const collectedReducers = combineReducers({
   list: playerlistReducer,
   socket: socketReducer,
   match: matchReducer,
   profile: profileReducer,
});

export default collectedReducers;
