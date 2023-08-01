import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isPlayer, legAverageOf, matchAverageOf } from "../utils/MatchUtils";
import { useProfile } from "./ProfileReducer";

const match = JSON.parse(localStorage.getItem("match"));

const initialState = {
   match: match ? match : {},
   currentLeg: match ? match.legs.at(-1) : {},
};

const ActionType = {
   ADD_SCORE: 11,
   EDIT_SCORE: 12,
   ADD_LEG: 13,
   SET_MATCH: 14,
   SET_THROW: 15,
   LEG_WON: 16,
   SET_LEG: 17,
   ADD_ACHIEVEMENT: 18,
   EDIT_LAST_ACHIEVEMENT: 19,
   REMOVE_ACHIEVEMENT: 20,
};

const matchReducer = (state = initialState, action) => {
   switch (action.type) {
      case ActionType.ADD_SCORE:
         return { ...state, currentLeg: { ...state.currentLeg, scores: [...state.currentLeg.scores, action.payload] } };
      case ActionType.EDIT_SCORE:
         const { player, score } = action.payload;

         const currentLeg = state.currentLeg;
         const lastScore = currentLeg.scores.filter((s) => s.player.id === player.id).at(-1);
         const indexOfLastScore = currentLeg.scores.indexOf(lastScore);

         currentLeg.scores.splice(indexOfLastScore, 1, score);

         return { ...state, currentLeg: currentLeg };
      case ActionType.ADD_LEG:
         return { ...state, match: { ...state.match, legs: [...state.match.legs, action.payload] }, currentLeg: action.payload };
      case ActionType.SET_LEG:
         const legs = state.match.legs;
         legs.splice(legs.length + action.payload.index, 1, action.payload.leg);

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
      case ActionType.EDIT_LAST_ACHIEVEMENT:
         var achievement = action.payload;
         var achievements = state.match.achievements;
         const lastAchievement = achievements.filter((a) => a.player.id === achievement.player.id && a.type === achievement.type).at(-1);

         achievements.splice(achievements.indexOf(lastAchievement), 1, achievement);

         return { ...state, achievements: achievements };
      case ActionType.REMOVE_ACHIEVEMENT:
         achievements = state.match.achievements;
         achievements.splice(achievements.indexOf(action.payload), 1);

         return { ...state, achievements };
      default:
         return state;
   }
};

export const addScore = (score) => {
   return { type: ActionType.ADD_SCORE, payload: score };
};
export const editLastScoreOf = (player, correctedScore) => {
   return { type: ActionType.EDIT_SCORE, payload: { player, score: correctedScore } };
};
export const addLeg = (leg) => {
   return { type: ActionType.ADD_LEG, payload: leg };
};
export const setLeg = (index, leg) => {
   return { type: ActionType.SET_LEG, payload: { index, leg } };
};
export const setMatch = (match) => {
   return { type: ActionType.SET_MATCH, payload: match };
};
export const setThrow = (player) => {
   return { type: ActionType.SET_THROW, payload: player };
};
export const incrementState = (player) => {
   return { type: ActionType.LEG_WON, payload: { id: player.id } };
};
export const addAchievement = (achievement) => {
   return { type: ActionType.ADD_ACHIEVEMENT, payload: achievement };
};
export const editLastAchievement = (achievement) => {
   return { type: ActionType.EDIT_LAST_ACHIEVEMENT, payload: achievement };
};
export const removeAchievement = (achievement) => {
   return { type: ActionType.REMOVE_ACHIEVEMENT, payload: achievement };
};

export const useMatch = () => {
   return useSelector((state) => state.match);
};

export const useLegAverage = (player) => {
   const { currentLeg } = useMatch();

   return legAverageOf(currentLeg, player);
};

export const useMatchAverage = (player) => {
   const { match, currentLeg } = useMatch();

   return matchAverageOf(match, currentLeg, player);
};

export const useLastScore = (player) => {
   const { currentLeg } = useMatch();

   return currentLeg.scores.filter((score) => isPlayer(score.player, player)).at(-1);
};

export const useAchievements = (player) => {
   const { match } = useMatch();

   return match.achievements.filter((achievement) => isPlayer(achievement.player, player));
};

export const useScores = (index) => {
   const { currentLeg } = useMatch();
   const profile = useProfile();
   const [hostScore, setHostScore] = useState(0);
   const [guestScore, setGuestScore] = useState(0);

   useEffect(() => {
      if (currentLeg.scores.length === 0) {
         setHostScore(null);
         setGuestScore(null);
         return;
      }

      const lastScore = currentLeg.scores.at(-1);

      if (lastScore.round === index) {
         if (isPlayer(lastScore.player, profile)) setHostScore(lastScore);
         else setGuestScore(lastScore);
      }
   }, [currentLeg]);

   return { host: hostScore, guest: guestScore };
};

export const useNextPlayer = () => {
   const { match, currentLeg } = useMatch();
   const lastScore = currentLeg.scores.at(-1);
   const throwFirst = currentLeg.throw === match.players.host.id ? match.players.host : match.players.guest;

   const checkPlayer = lastScore ? lastScore.next : throwFirst;
   const checkRound = currentLeg.scores.filter((score) => isPlayer(score.player, checkPlayer)).length;

   const [nextPlayer, setNextPlayer] = useState(checkPlayer);
   const [nextRound, setNextRound] = useState(checkRound);

   useEffect(() => {
      setNextRound(checkRound);
      setNextPlayer(checkPlayer);
   }, [currentLeg]);

   return [nextPlayer, nextRound];
};

export default matchReducer;
