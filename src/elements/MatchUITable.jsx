import DartIcon from "../assets/dart.png";
import MatchUITableRow from "../components/MatchUITableRow";
import React from "react";
import ScoreIcon from "../assets/score.png";
import { useDispatch } from "react-redux";
import { useBeforeUnload } from "react-router-dom";
import { useSocket } from "../context/SocketContext";
import { useProfile } from "../hooks/useProfile";
import { ActionType, useMatch } from "../state/MatchReducer";
import { fillTable, resetTable, toggleInputAvailability, isPlayer } from "../utils/MatchUtils";

function MatchUITable() {
   const { match, currentLeg } = useMatch();
   const [profile] = useProfile();
   const socket = useSocket();
   const dispatch = useDispatch();
   const [showScorePopup, setShowScorePopup] = React.useState(false);
   const lastScore = currentLeg.scores.at(-1);

   React.useEffect(() => {
      if (currentLeg.scores.length === 0 && isPlayer(profile, { id: currentLeg.throw })) {
         toggleInputAvailability(0);
         return;
      }

      currentLeg.scores.forEach((score) => {
         fillTable(score, profile);
      });

      if (!lastScore) return;

      if (!isPlayer(profile, lastScore.next)) return;
      isPlayer(profile, { id: currentLeg.throw }) ? toggleInputAvailability(lastScore.round + 1) : toggleInputAvailability(lastScore.round);
   }, []);

   React.useEffect(() => {
      if (currentLeg.scores.length === 0) {
         if (match.state.host + match.state.guest === 0) return;

         resetTable();
         isPlayer(profile, { id: currentLeg.throw }) && toggleInputAvailability(0);
         return;
      }

      if (lastScore.left === 0) {
         isPlayer(profile, lastScore.player) && toggleInputAvailability(lastScore.round);

         dispatch({ type: ActionType.SET_LEG, payload: { index: match.legs.length - 1, leg: currentLeg } });
         return;
      }

      fillTable(lastScore, profile);

      if (lastScore.value >= 91) {
         setShowScorePopup(true);
         setTimeout(() => setShowScorePopup(false), 2000);
      }

      if (isPlayer(profile, lastScore.player)) toggleInputAvailability(lastScore.round);
      else
         isPlayer(profile, { id: match.legs.at(-1).throw }) ? toggleInputAvailability(lastScore.round + 1) : toggleInputAvailability(lastScore.round);
   }, [currentLeg]);

   useBeforeUnload(() => {
      dispatch({ type: ActionType.SET_LEG, payload: { index: match.legs.length - 1, leg: currentLeg } });

      localStorage.setItem("match", JSON.stringify(match));
   });

   return (
      <div className="flex h-144 w-full justify-center overflow-auto md:h-192">
         {showScorePopup && (
            <div id="pus" className="absolute top-1/2 z-20 flex h-24 w-64 rounded-xl bg-white md:top-1/3 md:h-48 md:w-96">
               <h4 className="m-auto font-primary text-5xl font-black md:text-8xl">{lastScore.value}!</h4>
            </div>
         )}
         <table className="w-full overflow-scroll border-2 border-none text-center">
            <tr className=" sticky top-0 z-10 h-20 w-full bg-gray-300 font-primary text-3xl text-dark-window">
               <th className="h-full w-1/5 bg-slate-200">
                  <img src={ScoreIcon} className="m-auto h-10 w-10" />
               </th>
               <th className="h-full w-1/5 bg-slate-300">⬇</th>
               <th className="h-full w-1/5 bg-slate-200">
                  <img src={DartIcon} className="m-auto h-14 w-14" />
               </th>
               <th className="h-full w-1/5 bg-slate-300">⬇</th>
               <th className="h-full w-1/5 bg-slate-200">
                  <img src={ScoreIcon} className="m-auto h-10 w-10" />
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
