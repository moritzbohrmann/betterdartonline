import React from "react";
import UIButton from "../components/UIButton";

function MatchUIControl() {
   return (
      <div className="w-full h-20 fixed bottom-0 flex flex-wrap items-center justify-center gap-8 bg-dark-background">
         <UIButton className="bg-orange-500">Korrektur</UIButton>
         <UIButton className="bg-red-500">Aufgeben</UIButton>
      </div>
   );
}

export default MatchUIControl;
