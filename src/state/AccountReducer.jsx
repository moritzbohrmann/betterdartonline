import { useSelector } from "react-redux";

let initialState = {
   id: crypto.randomUUID(),
   username: "Moritz",
   email: null,
   profile: null,
   settings: null,
   isLoggedIn: false,
};

const ActionType = {
   SET_USERNAME: 28,
   SET_GAMEMODE: 29,
   SET_SCOREMODE: 30,
   SET_LEGAMOUNT: 31,
   SET_TD: 32,
   SET_SELECTED: 33,
   SET_EMAIL: 34,
   SET_LOGGED_IN: 35,
   SET_ACCOUNT: 36,
};

const accountReducer = (state = initialState, action) => {
   switch (action.type) {
      case ActionType.SET_USERNAME:
         return { ...state, username: action.payload };
      case ActionType.SET_GAMEMODE:
         return { ...state, gamemode: action.payload };
      case ActionType.SET_SCOREMODE:
         return { ...state, scoremode: action.payload };
      case ActionType.SET_LEGAMOUNT:
         return { ...state, legamount: action.payload };
      case ActionType.SET_TD:
         return { ...state, td: action.payload };
      case ActionType.SET_SELECTED:
         return { ...state, selected: action.payload };
      case ActionType.SET_EMAIL:
         return { ...state, email: action.payload };
      case ActionType.SET_LOGGED_IN:
         return { ...state, isLoggedIn: action.payload };
      case ActionType.SET_ACCOUNT:
         localStorage.setItem("account", JSON.stringify(action.payload));
         return { ...state, ...action.payload };

      default:
         return state;
   }
};

export const setUsername = (string) => {
   return { type: ActionType.SET_USERNAME, payload: string };
};
export const setGamemode = (gamemode) => {
   return { type: ActionType.SET_GAMEMODE, payload: gamemode };
};
export const setScoremode = (scoremode) => {
   return { type: ActionType.SET_SCOREMODE, payload: scoremode };
};
export const setLegamount = (value) => {
   return { type: ActionType.SET_LEGAMOUNT, payload: value };
};
export const setTD = (value) => {
   return { type: ActionType.SET_TD, payload: value };
};
export const setSelected = (value) => {
   return { type: ActionType.SET_SELECTED, payload: value };
};
export const setEmail = (value) => {
   return { type: ActionType.SET_EMAIL, payload: value };
};
export const setLoggedIn = (value) => {
   return { type: ActionType.SET_LOGGED_IN, payload: value };
};
export const setAccount = (value) => {
   return { type: ActionType.SET_ACCOUNT, payload: value };
};
export const setProfile = (value) => {};

export const useAccount = () => {
   return useSelector((state) => state.account);
};

export default accountReducer;
