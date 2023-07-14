import DartIcon from "../assets/dart.png";
import MatchUITableRow from "../components/MatchUITableRow";
import React from "react";
import ScoreIcon from "../assets/score.png";
import { useDispatch } from "react-redux";
import { useBeforeUnload } from "react-router-dom";
import { useSocket } from "../context/SocketContext";
import { useProfile } from "../hooks/useProfile";
import { ActionType, useMatch } from "../state/MatchReducer";
import { fillTable, resetTable, toggleInputAvailability } from "../utils/MatchUtils";
import { isPlayer } from "../utils/MatchUtils";

function MatchUITable() {
   const { match, currentLeg } = useMatch();
   const [profile] = useProfile();
   const socket = useSocket();
   const dispatch = useDispatch();
   const [showScorePopup, setShowScorePopup] = React.useState(false);
   const lastScore = currentLeg.scores.at(-1);

   React.useEffect(() => {
      if (currentLeg.scores.length === 0 && isPlayer(currentLeg.throw)) {
         toggleInputAvailability(0);
         return;
      }

      currentLeg.scores.forEach((score) => {
         fillTable(score, profile);
      });

      if (!isPlayer(lastScore?.next.id)) return;

      isPlayer(currentLeg.throw) ? toggleInputAvailability(lastScore.round + 1) : toggleInputAvailability(lastScore.round);
   }, []);

   React.useEffect(() => {
      if (currentLeg.scores.length === 0) {
         if (match.state.host + match.state.guest === 0) return;

         resetTable();
         isPlayer(currentLeg.throw) && toggleInputAvailability(0);
         return;
      }

      if (lastScore.left === 0) {
         isPlayer(lastScore.player.id) && toggleInputAvailability(lastScore.round);

         dispatch({ type: ActionType.SET_LEG, payload: { index: match.legs.length - 1, leg: currentLeg } });
         return;
      }

      fillTable(lastScore, profile);

      if (lastScore.value >= 91) {
         setShowScorePopup(true);
         setTimeout(() => setShowScorePopup(false), 2000);
      }

      if (isPlayer(lastScore.player.id)) toggleInputAvailability(lastScore.round);
      else isPlayer(match.legs.at(-1).throw) ? toggleInputAvailability(lastScore.round + 1) : toggleInputAvailability(lastScore.round);
   }, [currentLeg]);

   useBeforeUnload(() => {
      dispatch({ type: ActionType.SET_LEG, payload: { index: match.legs.length - 1, leg: currentLeg } });

      console.log("HI");

      localStorage.setItem("match", JSON.stringify(match));
   });

   return (
      <div className="w-full h-144 md:h-192 flex justify-center overflow-auto">
         {showScorePopup && (
            <div id="pus" className="w-64 md:w-96 h-24 md:h-48 absolute top-1/2 md:top-1/3 rounded-xl flex z-20 bg-white">
               <h4 className="m-auto text-5xl md:text-8xl font-primary font-black">{lastScore.value}!</h4>
            </div>
         )}
         <table className="w-full text-center border-2 overflow-scroll border-none">
            <tr className=" w-full h-20 bg-gray-300 text-dark-window text-3xl font-primary sticky top-0 z-10">
               <th className="w-1/5 h-full bg-slate-200">
                  <img src={ScoreIcon} className="w-10 h-10 m-auto" />
               </th>
               <th className="w-1/5 h-full bg-slate-300">⬇</th>
               <th className="w-1/5 h-full bg-slate-200">
                  <img src={DartIcon} className="w-14 h-14 m-auto" />
               </th>
               <th className="w-1/5 h-full bg-slate-300">⬇</th>
               <th className="w-1/5 h-full bg-slate-200">
                  <img src={ScoreIcon} className="w-10 h-10 m-auto" />
               </th>
            </tr>
            <tr className="h-20 bg-dark-background text-3xl font-bold text-white-default">
               <td className="w-1/5">/</td>
               <td className="w-1/5">{match.settings.scoremode}</td>
               <td className="w-1/5">0</td>
               <td className="w-1/5">{match.settings.scoremode}</td>
               <td className="w-1/5">/</td>
            </tr>
            <TableRowCollector profile={profile} socket={socket} />
         </table>
      </div>
   );
}

const TableRowCollector = (props) => {
   let render = [];

   for (let i = 0; i <= 30; i++) {
      render.push(<MatchUITableRow {...props} index={i} id={i} />);
   }

   return render;
};

export default MatchUITable;
