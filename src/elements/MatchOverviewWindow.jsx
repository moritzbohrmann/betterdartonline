import React from "react";
import UIWindow from "../components/UIWindow";

function MatchOverviewWindow() {
   return (
      <UIWindow title="Live" className="h-144 xl:w-208">
         <div className="mx-auto mt-4 flex h-96 w-192 flex-wrap overflow-auto">
            <Match />
            <Match />
            <Match />
            <Match />
         </div>
      </UIWindow>
   );
}

const Match = () => {
   return <div className="m-2 h-32 w-80 rounded-md bg-dark-input"></div>;
};

export default MatchOverviewWindow;
