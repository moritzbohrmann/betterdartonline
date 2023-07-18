import { useSelector } from "react-redux";

const match = JSON.parse(localStorage.getItem("match"));

const initialState = {
   match: match ? match : {},
   currentLeg: match ? match.legs.at(-1) : {},
};

export const ActionType = {
   ADD_SCORE: 11,
   EDIT_SCORE: 12,
   ADD_LEG: 13,
   SET_MATCH: 14,
   SET_THROW: 15,
   LEG_WON: 16,
   SET_LEG: 17,
   ADD_ACHIEVEMENT: 18,
};

const matchReducer = (state = initialState, action) => {
   switch (action.type) {
      case ActionType.ADD_SCORE:
         return { ...state, currentLeg: { ...state.currentLeg, scores: [...state.currentLeg.scores, action.payload] } };
      case ActionType.EDIT_SCORE:
         const { player, score } = action.payload;

         var currentLeg = state.currentLeg;
         var scores = currentLeg.scores;
         var scoreToEdit = scores.filter((s) => s.player === player.id).at(-1);
         var index = scores.indexOf(scoreToEdit);

         scores.splice(index, 1, score);

         currentLeg.scores = scores;
         legs.splice(legs.length - 1, 1, currentLeg);

         return { ...state, currentLeg: leg };
      case ActionType.ADD_LEG:
         return { ...state, match: { ...state.match, legs: [...state.match.legs, action.payload] }, currentLeg: action.payload };
      case ActionType.SET_LEG:
         const legs = state.match.legs;
         legs.splice(action.payload.index, 1, action.payload.leg);

         return { ...state, match: { ...state.match, legs: legs } };
      case ActionType.SET_MATCH:
         localStorage.setItem("match", JSON.stringify(action.payload));

         return { ...state, match: action.payload, currentLeg: action.payload.legs.at(-1) };
      case ActionType.SET_THROW:
         return { ...state, canThrow: action.payload };
      case ActionType.LEG_WON:
         return action.payload.id === state.match.players.host.id
            ? { ...state, match: { ...state.match, state: { ...state.match.state, host: state.match.state.host + 1 } } }
            : { ...state, match: { ...state.match, state: { ...state.match.state, guest: state.match.state.guest + 1 } } };
      case ActionType.ADD_ACHIEVEMENT:
         return { ...state, match: { ...state.match, achievements: [...state.match.achievements, action.payload] } };
      default:
         return state;
   }
};

export const useMatch = () => {
   return useSelector((state) => state.match);
};

export default matchReducer;
