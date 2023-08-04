import * as Match from "../state/MatchReducer";
import DartIcon from "../assets/dart.png";
import React from "react";
import ScoreIcon from "../assets/score.png";
import ScoreTableRow from "../components/ScoreTableRow";
import { useDispatch } from "react-redux";
import { useBeforeUnload } from "react-router-dom";
import { useSocket } from "../context/SocketContext";

function ScoreTable() {
   const { match, currentLeg } = Match.useMatch();
   const socket = useSocket();
   const dispatch = useDispatch();
   const [showScorePopup, setShowScorePopup] = React.useState(false);
   const lastScore = currentLeg.scores.at(-1);

   React.useEffect(() => {
      if (!lastScore) return;

      if (lastScore.value >= 91) {
         setShowScorePopup(true);
         setTimeout(() => setShowScorePopup(false), 2000);
      }
   }, [currentLeg]);

   useBeforeUnload(() => {
      dispatch(Match.setLeg(-1, currentLeg));

      localStorage.setItem("match", JSON.stringify(match));
   });

   return (
      <div id="matchuihead" className="flex h-144 w-full justify-center overflow-auto md:h-192">
         {showScorePopup && <ScorePopup score={lastScore} />}
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
            <TableRowCollector socket={socket} />
         </table>
      </div>
   );
}

const TableRowCollector = (props) => {
   let render = [];

   for (let i = 0; i <= 30; i++) {
      render.push(<ScoreTableRow {...props} index={i} />);
   }

   return render;
};

const ScorePopup = ({ score }) => {
   return (
      <div id="pus" className="absolute top-1/2 z-20 flex h-24 w-min rounded-xl bg-white px-20 md:top-1/3 md:h-48">
         <h4 className="m-auto font-primary text-5xl font-black md:text-8xl">{score ? score.value : "Checkout"}!</h4>
      </div>
   );
};

export default ScoreTable;
