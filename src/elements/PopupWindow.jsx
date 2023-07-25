import $ from "jquery";
import Challenge from "./ChallengePopUp";
import React from "react";
import Settings from "./SettingsWindow";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { addBlur, removeBlur } from "../utils/StyleUtils";

function PopupWindow() {
   const current = useSelector((state) => state.list.requests.current);
   const location = useLocation();

   const openChallenge = () => {
      addBlur();

      return <Challenge />;
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
            <Route path="/settings" element={<Settings />} />
         </Routes>
         {current ? openChallenge() : removeBlur()}
      </>
   );
}

export default PopupWindow;
