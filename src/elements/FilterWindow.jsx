import $ from "jquery";
import InputField from "../components/InputField";
import React from "react";
import Toggler from "../components/Toggler";
import UIWindow from "../components/UIWindow";
import { useDispatch } from "react-redux";
import { ActionType } from "../state/PlayerlistReducer";

function FilterWindow() {
   const dispatch = useDispatch();

   const getFilter = (checked) => {
      return `${checked ? $("#filterInput").val : ""}`;
   };

   return (
      <UIWindow title="Filter" className="h-60">
         <div className="m-auto w-80 flex gap-6">
            <div className="w-11 h-6  m-auto">
               <Toggler onChange={(checked) => dispatch({ type: ActionType.APPLY_FILTER, payload: getFilter(checked) })} />
            </div>
            <InputField
               className="m-auto"
               placeholder="Filtereingabe"
               id="filterInput"
               onChange={(e) => {
                  if ($("#filter")[0].checked === true) {
                     dispatch({ type: ActionType.APPLY_FILTER, payload: e.target.value });
                  }
               }}
            />
         </div>
      </UIWindow>
   );
}

export default FilterWindow;
