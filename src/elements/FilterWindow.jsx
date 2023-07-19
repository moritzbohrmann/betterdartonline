import $ from "jquery";
import InputField from "../components/InputField";
import React, { useRef } from "react";
import Toggler from "../components/UIToggler";
import UIWindow from "../components/UIWindow";
import { useDispatch } from "react-redux";
import { applyFilter } from "../state/PlayerlistReducer";

function FilterWindow() {
   const dispatch = useDispatch();
   const filterRef = React.useRef(null);

   return (
      <UIWindow title="Filter" className="h-60">
         <div className="m-auto flex w-80 gap-6">
            <div className="m-auto h-6 w-11">
               <Toggler onChange={(checked) => dispatch(applyFilter(checked ? $("#filterInput").val : ""))} />
            </div>
            <InputField
               innerRef={filterRef}
               className="m-auto"
               placeholder="Filtereingabe"
               id="filterInput"
               onChange={(e) => {
                  if ($("#filter")[0].checked === true) {
                     dispatch(applyFilter(e.target.value));
                  }
               }}
            />
         </div>
      </UIWindow>
   );
}

export default FilterWindow;
