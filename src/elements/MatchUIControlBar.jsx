import React from "react";
import UIButton from "../components/UIButton";
import $ from "jquery";

function MatchUIControl() {
   const [correctionWindowVisibility, setCorrectionWindowVisibility] = React.useState(false);

   const toggleCorrectionWindowVisibility = () => {
      switch (correctionWindowVisibility) {
         case false:
            $("#corwin").removeClass("hidden");
            setCorrectionWindowVisibility(true);
            break;
         case true:
            $("#corwin").addClass("hidden");
            setCorrectionWindowVisibility(false);
            break;
      }
   };

   return (
      <div className="fixed bottom-0 flex h-20 w-full flex-wrap items-center justify-center gap-8 bg-dark-background">
         <UIButton className="bg-orange-500" onClick={toggleCorrectionWindowVisibility}>
            Korrektur
         </UIButton>
         <UIButton className="bg-red-500">Aufgeben</UIButton>
      </div>
   );
}

export default MatchUIControl;
