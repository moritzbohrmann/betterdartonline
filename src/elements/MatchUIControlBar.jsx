import React from "react";
import UIButton from "../components/UIButton";
import $ from "jquery";
import { useMatch } from "../state/MatchReducer";
import { useProfile } from "../hooks/useProfile";
import { addBlur, removeBlur } from "../utils/StyleUtils";

function MatchUIControl() {
   const { currentLeg } = useMatch();
   const [profile] = useProfile();

   const toggleCorrectionWindowVisibility = () => {
      if (currentLeg.scores.filter((score) => score.player.id === profile.id).length === 0) return;

      if (currentLeg.scores.at(-1)?.player.id === profile.id) return;

      $("#corwin").removeClass("hidden");
      addBlur("#matchuicontrolbar, #matchuihead, #matchuitable");
   };

   return (
      <div id="matchuicontrolbar" className="fixed bottom-0 flex h-20 w-full flex-wrap items-center justify-center gap-8 bg-dark-background">
         <UIButton className="bg-orange-500" onClick={toggleCorrectionWindowVisibility}>
            Korrektur
         </UIButton>
         <UIButton className="bg-red-500">Aufgeben</UIButton>
      </div>
   );
}

export default MatchUIControl;
