import { useSelector } from "react-redux";

let initialState = {
   id: crypto.randomUUID(),
   username: "Max Mustermann",
   gamemode: "firstto",
   scoremode: "501",
   legamount: "5",
   td: "All",
   selected: "X01",
};

const storageProfile = localStorage.getItem("profile");

if (storageProfile !== null) initialState = JSON.parse(storageProfile);
else localStorage.setItem("profile", JSON.stringify(initialState));

const ActionType = {
   SET_USERNAME: 21,
   SET_GAMEMODE: 22,
   SET_SCOREMODE: 23,
   SET_LEGAMOUNT: 24,
   SET_TD: 25,
   SET_SELECTED: 26,
   SET_EMAIL: 27,
};

const ProfileReducer = (state = initialState, action) => {
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
      case ActionType.SET_SELECTED: {
         return { ...state, selected: action.payload };
      }
      case ActionType.SET_EMAIL: {
         return { ...state, email: action.payload };
      }
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

export const useProfile = () => {
   return useSelector((state) => state.profile);
};

export default ProfileReducer;
