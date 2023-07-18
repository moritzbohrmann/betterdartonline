import $ from "jquery";
import InputField from "../components/InputField";
import React, { useRef } from "react";
import Toggler from "../components/UIToggler";
import UIWindow from "../components/UIWindow";
import { useDispatch } from "react-redux";
import { ActionType } from "../state/PlayerlistReducer";

function FilterWindow() {
   const dispatch = useDispatch();

   return (
      <UIWindow title="Filter" className="h-60">
         <div className="m-auto flex w-80 gap-6">
            <div className="m-auto h-6 w-11">
               <Toggler onChange={(checked) => dispatch({ type: ActionType.APPLY_FILTER, payload: checked ? $("#filterInput").val : "" })} />
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
