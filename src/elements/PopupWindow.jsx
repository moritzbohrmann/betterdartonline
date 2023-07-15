import $ from "jquery";
import Challenge from "./ChallengePopUp";
import React from "react";
import Settings from "./SettingsWindow";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";

function PopupWindow() {
   const current = useSelector((state) => state.list.requests.current);
   const location = useLocation();

   const openChallenge = () => {
      addBlur();

      return (
         <dialog open className="bg-transparent">
            <Challenge />
         </dialog>
      );
   };

   const addBlur = () => {
      $("#homeui-navigation, #homeui-windows").addClass("blur-lg transition-all");
   };
   const removeBlur = () => {
      $("#homeui-navigation, #homeui-windows").removeClass("blur-lg");
   };

   React.useEffect(() => {
      switch (location.pathname) {
         case "/home":
            return removeBlur();
         case "/home/settings":
            return addBlur();
      }
   }, [location]);

   return (
      <>
         <Routes>
            <Route
               path="/settings"
               element={
                  <dialog open className="bg-transparent transition-all">
                     <Settings />
                  </dialog>
               }
            />
         </Routes>
         {current ? openChallenge() : removeBlur()}
      </>
   );
}

export default PopupWindow;
