import InputField from "../components/InputField";
import React from "react";
import Toggler from "../components/UIToggler";
import UIWindow from "../components/UIWindow";
import { useDispatch } from "react-redux";
import { applyFilter } from "../state/PlayerlistReducer";

function FilterWindow() {
   const dispatch = useDispatch();
   const inputRef = React.useRef(null);
   const togglerRef = React.useRef(null);

   return (
      <UIWindow title="Filter" className="h-60">
         <div className="m-auto flex w-80 gap-6">
            <div className="m-auto h-6 w-11">
               <Toggler innerRef={togglerRef} onChange={(checked) => dispatch(applyFilter(checked ? inputRef.current?.value : ""))} />
            </div>
            <InputField
               innerRef={inputRef}
               className="m-auto"
               placeholder="Filtereingabe"
               id="filterInput"
               onChange={(e) => {
                  if (togglerRef.current?.checked === true) {
                     dispatch(applyFilter(e.target.value));
                  }
               }}
            />
         </div>
      </UIWindow>
   );
}

export default FilterWindow;
